const passport = require('passport');

module.exports = app => {

  // auth routes for google login starts
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );
  // auth routes for google login ends

  // auth routes for spotify login starts
  app.get(
    '/auth/spotify',
    passport.authenticate('spotify', {
      scope: ['user-read-email']
    })
  );

  app.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify'),
    (req, res) => {
      res.redirect('/');
    }
  );
  // auth routes for spotify login ends

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
