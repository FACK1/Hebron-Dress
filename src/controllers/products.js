const { Dress, } = require('../database/models');
const sequelize = require('sequelize');

exports.get = (req, res, next) => {
  Dress.findAll()
    .then((dresses) => {
      res.render('product', { dresses, result: 'result', css: 'product', });
    })
    .catch((err) => {
      next(err);
    });
};
