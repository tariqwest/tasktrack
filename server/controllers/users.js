const models = require('../../db/models');

module.exports.get = (req, res) => {
  if(req.query.id){
    module.exports.getOne(req, res);
  } else {
    module.exports.getAll(req, res);
  }
};

module.exports.getAll = (req, res) => {
  models.User.all()
    .then(users => res.status(200).send(users))
    .catch((err) => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};

module.exports.getOne = (req, res) => {
  models.User.findAll({ where: { id: req.query.id } })
    .then(user => res.status(200).send(user))
    .catch((err) => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};