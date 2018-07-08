const DataLoader = require('dataloader');
const getTracksFromUserPlaylist = require('../services/spotify/tracksOfPlaylist').getTracksFromUserPlaylist;

const PlaylistTracks = new DataLoader(async (keys) => {
  return Promise.all(keys.map(async (key) => {
    const response = await getTracksFromUserPlaylist(key.accessToken, key.urls[0]);

    return response;
  }));
});

const getTrackUrlFromPlaylist = function(playlists) {
  const urls = playlists.items.map((playlist) => {
    return playlist.href;
  });

  return urls;
}

module.exports = {
  getTrackUrlFromPlaylist,
  PlaylistTracks,
};
