const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

// 1 argument => we're fetching something out of mongoose
// 2 arguments => we're trying to load something into it
const User = mongoose.model('users');

//user is whatever that was just pulled out of the db. the model instance
//user.id !== profile.id. user.id is the id assigned by mongo.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // we already have a record with the given profile id
        return done(null, existingUser);
      } 
      // we don't have a record with this id, create new model instance
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);