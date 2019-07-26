const passport = require('passport');

module.exports = (app) => {
  // 1. this route lets user sign in
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  
  // 2. user has signed in* this route already has the "code=4" sent to server
  // 3. Then generates access token. This will save user to database
  app.get('/auth/google/callback', passport.authenticate('google'));

  // tests to make sure that someone who has already gone thru oauth flow
  // and all logged in can now get access 
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
