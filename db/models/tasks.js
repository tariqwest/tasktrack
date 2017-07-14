const db = require('../../db');
const Sequelize = require('sequelize');
const models = require('.');

const Task = db.define('task', {
  type: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  detail: {
    type: Sequelize.STRING
  },
  startTime: {
    type: Sequelize.STRING
  },
  endTime: {
    type: Sequelize.STRING
  },
  owner: {
    type: Sequelize.INTEGER,
    references: {
      model: models.User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    }
 }
});

module.exports = Task;
