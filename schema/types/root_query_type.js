const graphql = require('graphql');
const { GraphQLObjectType, GraphQLBoolean } = graphql;
const UserType = require('./user_type');
const { SpotifyUser, SpotifyPlaylist } = require('./spotify_type');
const getUserDetails = require('../../services/spotify/userDetails').getUserDetails;
const getUserPlaylist = require('../../services/spotify/playlists').getUserPlaylist;
const { extractTokenFromRequestCookie } = require('../../services/helper');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentvalue, args, req) {
        return req.user;
      }
    },
    spotify_user_details: {
      type: SpotifyUser,
      resolve(parentvalue, args, req) {
        const accessToken = extractTokenFromRequestCookie(req.headers.cookie);
        return getUserDetails(accessToken);
      }
    },
    spotify_user_playlist: {
      type: SpotifyPlaylist,
      resolve(parentvalue, args, req) {
        const accessToken = extractTokenFromRequestCookie(req.headers.cookie);
        return getUserPlaylist(accessToken);
      }
    }
  }
});

module.exports = RootQueryType;