const request = require('request');

function getUserPlaylist(accessToken) {
  return new Promise((resolve, reject) => {
    var options = {
      url: 'https://api.spotify.com/v1/me/playlists',
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
  getUserPlaylist
};
