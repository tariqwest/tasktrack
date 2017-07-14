const User = require('../db/models/users');

// Setup users model
User.sync({force: true});