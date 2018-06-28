const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const Spotify = new GraphQLObjectType({
  name: 'Spotify',
  fields: {
    display_name: { type: GraphQLString }
  }
});

module.exports = Spotify;
