const request = require('request');

function getTracksFromUserPlaylist(accessToken, userId, playlistId) {
  return new Promise((resolve, reject) => {
    var options = {
      url: 'https://api.spotify.com/v1/users/'+ userId + '/playlists/' + playlistId + '/tracks',
      headers: { 'Authorization': 'Bearer ' + accessToken },
      json: true
    };

    // use the access token to access the Spotify Web API
    request.get(options, function(error, response, body) {
      resolve(body);
    });
  });
}

module.exports = {
  getTracksFromUserPlaylist
};
