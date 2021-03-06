const request = require('request');

function search(accessToken, query, type) {
  return new Promise((resolve, reject) => {
    var options = {
      url: 'https://api.spotify.com/v1/search',
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
  search
};
