var express = require("express");
var router = express.Router();
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
var expressValidator = require('express-validator');

var db = require("../../models");

router.post('/Login', passport.authenticate('local-signin', {
    successRedirect: '/Dashboard', // redirect to the secure game section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}));

export default router;