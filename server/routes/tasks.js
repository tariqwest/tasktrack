const express = require('express');
const TaskController = require('../controllers').Tasks;

const router = express.Router();

// api/users
router.route('/')
  .get(TaskController.getAllForUser)
  .post(TaskController.create)
  .put(TaskController.update)
  .delete(TaskController.delete)

module.exports = router;
