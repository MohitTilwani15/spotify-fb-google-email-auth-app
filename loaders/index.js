const DataLoader = require('dataloader');
const User = require('./userLoader');
const Playlist = require('./playlistLoader');

function createLoaders() {
  return {
    User,
    Playlist,
  };
}

module.exports = createLoaders;
