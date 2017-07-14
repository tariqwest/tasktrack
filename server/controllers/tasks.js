const models = require('../../db/models');

module.exports.getAllForUser = (req, res) => {
  models.Task.findAll({ where: { owner: req.query.userId } })
    .then(task => res.status(200).send(task))
    .catch((err) => {
      res.status(503).send(err);
    });
};

module.exports.create = (req, res) => {
  models.Task.create(req.body)
    .then(task => res.status(200).send(task))
    .catch((err) => {
      res.status(503).send(err);
    });
};

module.exports.update = (req, res) => {
  models.Task.update(req.body, {where:{ id: req.body.id}})
    .then(task => res.status(200).send(task))
    .catch((err) => {
      res.status(503).send(err);
    });
};

module.exports.delete = (req, res) => {
  models.Task.destroy({ where: { id: req.body.id } })
    .then(task => res.sendStatus(200))
    .catch((err) => {
      res.status(503).send(err);
    });
};
