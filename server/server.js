const path = require('path');
const express = require('express');
const app = express();

 
app.use(express.static(path.join(__dirname, '../public')));
 
const server = app.listen(3000, () => {
  console.log('TaskTrack app listening at http://localhost:3000');
});