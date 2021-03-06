const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .then(() => {
    return db.sync();
  })
  .then(() => {
    console.log('Synchronized tables successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;
