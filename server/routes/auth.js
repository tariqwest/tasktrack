const express = require('express');
const middleware = require('../middleware');

const router = express.Router();

const prefix = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:1337';

router.use((req, res, next) => {
  if (req.query && req.query.returnTo) {
    req.session.returnTo = prefix + req.query.returnTo;
  }

  next();
});

router.get('/facebook', middleware.passport.authenticate('facebook', {
  scope: ['public_profile', 'email'],
}));

router.get('/facebook/callback', middleware.passport.authenticate('facebook', {
  successReturnToOrRedirect: '/profile',
  failureRedirect: '/login',
}));

router.get('/status', (req, res) => {
  const user = req.user;
  const userId = user && user.id;
  res.send({ loggedIn: req.isAuthenticated(), userId });
});

router.route('/logout')
  .get((req, res) => {
    req.logout();
    res.send({ loggedOut: true });
  });

module.exports = router;
