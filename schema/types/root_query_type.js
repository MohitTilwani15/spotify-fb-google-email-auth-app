const graphql = require('graphql');
const { GraphQLObjectType, GraphQLBoolean } = graphql;
const UserType = require('./user_type');
const { SpotifyUser, SpotifyPlaylist, spotifyFullPlaylistDetails } = require('./spotify_type');
const { extractTokenFromRequestCookie } = require('../../services/helper');
const { getTrackUrlFromPlaylist } = require('../../loaders/playlistTracksLoader');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentvalue, args, context) {
        return context.req.user;
      },
    },
    spotifyUserDetails: {
      type: SpotifyUser,
      async resolve(parentvalue, args, context) {
        const accessToken = extractTokenFromRequestCookie(context.req.headers.cookie);
        const { User } = context.loaders;
        const user = await User.load(accessToken);

        return user;
      },
    },
    spotifyUserPlaylist: {
      type: spotifyFullPlaylistDetails,
      async resolve(parentvalue, args, context) {
        const accessToken = extractTokenFromRequestCookie(context.req.headers.cookie);
        const { Playlist, PlaylistTracks } = context.loaders;
        const playlist = await Playlist.load(accessToken);

        const urls = getTrackUrlFromPlaylist(playlist);
        const tracks = await PlaylistTracks.load({ accessToken, urls });

        return {
          playlist,
          tracks,
        };
      },
    },
  },
});

module.exports = RootQueryType;
