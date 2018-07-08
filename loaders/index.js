const DataLoader = require('dataloader');
const User = require('./userLoader');
const Playlist = require('./playlistLoader');
const { PlaylistTracks } = require('./playlistTracksLoader');

function createLoaders() {
  return {
    User,
    Playlist,
    PlaylistTracks,
  };
}

module.exports = createLoaders;
