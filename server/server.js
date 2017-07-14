require('dotenv').config(); // import environmental variables from .env file
const path = require('path');
const express = require('express');
const app = express();
const db = require('../db');
const routes = require('./routes');

app.use('/api/users', routes.users);

app.use(express.static(path.join(__dirname, '../public')));
 
const server = app.listen(3000, () => {
  console.log('TaskTrack app listening at http://localhost:3000');
});