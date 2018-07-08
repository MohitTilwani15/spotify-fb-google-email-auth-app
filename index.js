// Require external dependencies
const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

const schema = require('./schema/schema');
const keys = require('./config/keys');
const loaders = require('./loaders');

require('./models/user');
require('./services/authentication/passport-local');

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

app.use('/graphql', expressGraphQL(request => {
  const startTime = Date.now();
  return {
    schema,
    context: { loaders: loaders(), req: request },
    graphiql: true,
    formatError: error => ({
      message: error.message,
      locations: error.locations,
      stack: error.stack ? error.stack.split('\n') : [],
      path: error.path
    }),
    extensions({ document, variables, operationName, result }) {
      return { runTime: Date.now() - startTime };
    }
  };
}));

// listen to incoming request on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listening on', PORT);
});
