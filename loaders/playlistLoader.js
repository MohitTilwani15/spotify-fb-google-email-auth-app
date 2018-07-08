const DataLoader = require('dataloader');
const getUserPlaylist = require('../services/spotify/playlists').getUserPlaylist;

const Playlist = new DataLoader(async (keys) => {
  return Promise.all(keys.map(async (accessToken) => {
    const response = await getUserPlaylist(accessToken);

    return response;
  }));
});

module.exports = Playlist;
