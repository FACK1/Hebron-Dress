
const { Dress, User, } = require('../database/models');
const sequelize = require('sequelize');

exports.get = (req, res) => {
  const { id, } = req.params;
  const logged = !!req.cookies.logged_in;

  User.findOne({ where: { id: req.id, }, }).then((user) => {
    Dress.findAll({ where: { userId: req.id, }, }).then((dresses) => {
      res.render('profile', {
        user, dresses, css: 'profile', logged,
      });
    });
  });
};
