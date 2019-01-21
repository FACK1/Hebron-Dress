
const { Dress, User, } = require('../database/models');
const sequelize = require('sequelize');

exports.get = (req, res) => {
  const { id, } = req.params;
  Dress.findAll({
    where:{'userId':req.id}
  }).then((dresses) => {
    res.render('profile', { dresses, css: 'profile', });
  });
};
