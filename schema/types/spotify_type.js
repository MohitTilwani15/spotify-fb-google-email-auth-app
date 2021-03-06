const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = graphql;

const SpotifyUser = new GraphQLObjectType({
  name: 'SpotifyUser',
  fields: () => ({
    display_name: { type: GraphQLString }
  }),
});

const SpotifySinglePlaylist = new GraphQLObjectType({
  name: 'SpotifySinglePlaylist',
  fields: () => ({
    name: { type: GraphQLString },
    href: { type: GraphQLString },
  }),
});

const SpotifyPlaylist = new GraphQLObjectType({
  name: 'SpotifyPlaylist',
  fields: () => ({
    href: { type: GraphQLString },
    items: { type: new GraphQLList(SpotifySinglePlaylist) },
  }),
});

const SpotifyPlaylistTracks = new GraphQLObjectType({
  name: 'SpotifyPlaylisTracks',
  fields: () => ({
    href: { type: GraphQLString },
  }),
});

const spotifyFullPlaylistDetails = new GraphQLObjectType({
  name: 'spotifyFullPlaylistDetails',
  fields: () => ({
    playlist: { type: SpotifyPlaylist },
    tracks: { type: SpotifyPlaylistTracks }
  })
})

module.exports = {
  SpotifyUser,
  SpotifyPlaylist,
  spotifyFullPlaylistDetails,
};
