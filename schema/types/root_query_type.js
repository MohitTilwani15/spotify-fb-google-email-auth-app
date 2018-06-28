const graphql = require('graphql');
const { GraphQLObjectType, GraphQLBoolean } = graphql;
const UserType = require('./user_type');
const Spotify = require('./spotify_type');
const getUserDetails = require('../../services/spotify/userDetails').getUserDetails;

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentvalue, args, req) {
        return req.user;
      }
    },
    spotify: {
      type: Spotify,
      resolve(parentvalue, args, req) {
        return getUserDetails(accessToken);
      }
    }
  }
});

module.exports = RootQueryType;