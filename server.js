"use strict";
// Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const methodOverride = require('method-override');
// db
const db = require('./models/');

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
app.use(express.static('app/public'));

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

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("🌎 listening on port %s", PORT);
        console.log(db.user);
        console.log(db.Property);
    });

});