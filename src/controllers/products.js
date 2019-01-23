const { Dress, } = require('../database/models');
const sequelize = require('sequelize');

exports.get = (req, res, next) => {
  const logged = !!req.cookies.logged_in;
  Dress.findAll()
    .then((dresses) => {
      res.render('product', { dresses, css: 'product', logged, });
    })
    .catch((err) => {
      next(err);
    });
};
