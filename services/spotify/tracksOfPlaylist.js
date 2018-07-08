const request = require('request');

function getTracksFromUserPlaylist(accessToken, url) {
  return new Promise((resolve, reject) => {
    var options = {
      url,
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
