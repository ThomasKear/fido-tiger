//load bcrypt
var bCrypt = require('bcrypt');

module.exports = function(passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    /*Serialize & Deserialize User (Login & Logout)*/
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
    /*Local Signup Strategy*/
    passport.use('local-signup', new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, username, password, done) {


            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({ where: { username: username } }).then(function(user) {

                if (user) {
                    return done(null, false, { message: 'That username is already taken' });
                } else {
                    var userPassword = generateHash(password);
                    var data = {
                        username: username,
                        password: userPassword,
                        email: req.body.email
                    };


                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(null, newUser);

                        }


                    });
                }


            });



        }



    ));

    /*Local Signin Strategy*/
    passport.use('local-signin', new LocalStrategy(

        {

            // by default, local strategy uses username and password, we will override with username
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function(req, username, password, done) {

            var User = user;

            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            };

            User.findOne({ where: { username: username } }).then(function(user) {

                if (!user) {
                    return done(null, false, { message: 'username does not exist' });
                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, { message: 'Incorrect password.' });

                }

                var userinfo = user.get();

                return done(null, userinfo);

            }).catch(function(err) {

                console.log("Error:", err);

                return done(null, false, { message: 'Something went wrong with your Signin' });


            });

        }
    ));

};