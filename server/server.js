require('dotenv').config(); // import environmental variables from .env file
const path = require('path');
const express = require('express');
const app = express();
const db = require('../db');
const middleware = require('./middleware');
const routes = require('./routes');

app.use(middleware.morgan('dev'));
app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({ extended: false }));
app.use(middleware.bodyParser.json());

app.use(middleware.auth.session);
app.use(middleware.passport.initialize());
app.use(middleware.passport.session());

app.use('/auth', routes.auth);
app.use('/api/users', routes.users);
app.use('/api/tasks', routes.tasks);

app.use(express.static(path.join(__dirname, '../public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public', 'index.html'));
});

// Setup model tables
// const models = require('../db/models');
// models.User.sync({force: true});
// models.Task.sync({force: true});

const server = app.listen(3000, () => {
  console.log('TaskTrack app listening at http://localhost:3000');
});
