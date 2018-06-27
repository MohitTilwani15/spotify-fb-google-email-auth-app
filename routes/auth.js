const qs = require('qs');
const keys = require('../config/keys');
const redirect_uri = 'http://localhost:3000/spotify';
const stateKey = 'spotify_auth_state';

module.exports = app => {
  app.get('/spotify_login', function(req, res) {

    var state = 'vdhjvhvdcwdhj';
    res.cookie(stateKey, state);
  
    // your application requests authorization
    res.redirect('https://accounts.spotify.com/authorize?' +
      qs.stringify({
        response_type: 'code',
        client_id: keys.spotifyClientID,
        scope: 'user-read-private,user-read-email',
        redirect_uri: redirect_uri,
        state: state
      }));
  });
};
