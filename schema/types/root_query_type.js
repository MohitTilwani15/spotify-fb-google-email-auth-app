const graphql = require('graphql');
const { GraphQLObjectType, GraphQLBoolean } = graphql;
const UserType = require('./user_type');
const { SpotifyUser, SpotifyPlaylist } = require('./spotify_type');
const { extractTokenFromRequestCookie } = require('../../services/helper');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentvalue, args, req) {
        return req.user;
      },
    },
    spotify_user_details: {
      type: SpotifyUser,
      async resolve(parentvalue, args, context) {
        const accessToken = extractTokenFromRequestCookie(context.req.headers.cookie);
        const { User } = context.loaders;
        const user = await User.load(accessToken);

        return user;
      },
    },
    spotify_user_playlist: {
      type: SpotifyPlaylist,
      async resolve(parentvalue, args, context) {
        const accessToken = extractTokenFromRequestCookie(context.req.headers.cookie);
        const { Playlist } = context.loaders;
        const playlist = await Playlist.load(accessToken);

        return playlist;
      },
    },
  },
});

module.exports = RootQueryType;