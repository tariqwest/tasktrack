const express = require('express');
const UserController = require('../controllers').Users;

const router = express.Router();

// api/users
router.route('/')
  .get(UserController.get);

module.exports = router;
