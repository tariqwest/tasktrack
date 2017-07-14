const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const models = require('../../db/models');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => (
  models.User.findAll({ where: { id: id } })
    .then((user) => {
      if (!user) {
        throw user;
      }
      done(null, user[0].dataValues);
    })
    .error((error) => {
      done(error, null);
    })
));

passport.use('facebook', new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  callbackURL: `${process.env.SERVER_URL}/auth/facebook/callback`,
  profileFields: ['id', 'emails', 'name']
},
  (accessToken, refreshToken, profile, done) => getOrCreateUser(accessToken, profile, done))
);

const getOrCreateUser = (accessToken, profile, done) => {
  return models.User.findAll({ where: { facebookId: profile.id } })
    .then((user) => {
      if (user.length > 0) {
        console.log('*** User found', user);
        return done(null, user[0].dataValues);
      } else {
        const userInfo = {
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          facebookId: profile.id,
          facebookToken: accessToken,
        };
        return models.User.create(userInfo);
      }
    })
    .then((user) => {
      console.log('*** User created', user);
      return done(null, user[0].dataValues);
    })
    .error((error) => {
        console.log('*** Error while getting or creating user', error);              
        done(error, null);
    })
};

module.exports = passport;
