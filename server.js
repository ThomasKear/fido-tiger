// Dependencies
// =============================================================
const path = require('path');
const fs = require('fs');
const express = require('express');
const React = require('react');
const Router = require('react-router');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');
// db
const db = require('./models/');
// const routes = require('./app/config/routes');

var ENV = require('./env');

// Express
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// Cookie-Parser / Express Validator
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser());
// Method Override
app.use(methodOverride('_method'));
// Static directory
app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('./app/config/routes.js'));
// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session());
//load passport strategies
require('./app/config/passport.js')(passport, db.user);

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("🌎 listening on port %s", PORT);
    });

});