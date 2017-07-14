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
      done(null, user.serialize());
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
  (accessToken, refreshToken, profile, done) => getOrCreateUser(accessToken, refreshToken, profile, done))
);

const getOrCreateUser = (type, profile, done) => {
  return models.User.findAll({ where: { facebookId: profile.id } })
    .then((user) => {
      if (user) {
        return done(null, user);
      } else {
        const userInfo = {
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
        };
        return models.User.create(userInfo);
      }
    })
    .then((user) => {
      return done(null, user);
    })
    .error((error) => {
        done(error, null);
    })
};

module.exports = passport;
