// Require external dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

require('./models/user');
require('./services/passport-google');
require('./services/passport-spotify');

// connect to MongoDB database
mongoose.connect(keys.mongoURI);

// create an express app
const app = express();

// parse the body data when sent through request before sending response
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app);

if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assests like main.js and main.css
  app.use(express.static('client/build'));

  //Express will serve up index.html file if it doesn't recognisze the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// listen to incoming request on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on', PORT);
});
