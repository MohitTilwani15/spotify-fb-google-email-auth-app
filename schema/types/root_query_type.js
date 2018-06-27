const graphql = require('graphql');
const { GraphQLObjectType, GraphQLBoolean } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentvalue, args, req) {
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;