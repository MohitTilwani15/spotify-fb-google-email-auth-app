const qs = require('qs');
const keys = require('../config/keys');
const redirect_uri = 'http://localhost:3000/api/spotify/callback';
const stateKey = 'spotify_auth_state';
const accessTokenKey = 'spotify-access-token';
const refreshTokenKey = 'spotify-refresh-token';

module.exports = app => {

  app.get('/api/spotify/login', function(req, res) {

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

  app.get('/api/spotify/callback', function(req, res) {
    // FE requests refresh and access tokens after checking the state parameter
  
    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;
  
    if (state === null || state !== storedState) {
      // state mismatch
      res.redirect('/error');
    } else {
      res.clearCookie(stateKey);
      var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code'
        },
        headers: {
          'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        json: true
      };
  
      request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
  
          var access_token = body.access_token,
              refresh_token = body.refresh_token;
          
          res.cookie(accessTokenKey, access_token);
          res.cookie(refreshTokenKey, refresh_token);
  
          var options = {
            url: 'https://api.spotify.com/v1/me',
            headers: { 'Authorization': 'Bearer ' + access_token },
            json: true
          };
  
          // use the access token to access the Spotify Web API
          request.get(options, function(error, response, body) {
            console.log(body);
          });

          res.send(body);
        } else {
          // invalid token
          res.redirect('/error');
        }
      });
    }
  });

  app.get('/refresh_token', function(req, res) {
    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
      form: {
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      },
      json: true
    };
  
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token;
        res.cookie(accessTokenKey, access_token);
        res.send({});
      }
    });
  });
  
};
