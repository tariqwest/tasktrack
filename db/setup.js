const models = require('../db/models');

// Setup model tables
models.User.sync({ force: true })
.then(() => {
  models.Task.sync({ force: true });
});
