const models = require('../db/models');

// Setup model tables
models.User.sync({force: true});
models.Task.sync({force: true});
