const sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
  User,
} = require('../database/models');

const {
  SECRET,
} = process.env;

exports.get = (req, res) => {
  res.render('login', { css: 'login', });
};


exports.post = (req, res) => {
  const { email, password, } = req.body;
  User.findOne({
    where: {
      email,
    },
    attributes: ['id', 'email', 'password', ],
    raw: true,
  }).then((result) => {
    if (!result) {
      res.render('login', {
        css: 'login',
        messageLogin: 'User not exists',
      });
      return;
    }
    bcrypt.compare(password, result.password, (err, result2) => {
      if (err) {
        res.send(err);
      }
      if (!result2) {
        res.render('login', {
          css: 'login',
          messageLogin: 'User not exists',
        });
      }
      if (result2) {
        const token = jwt.sign({
          id: result.id,
          email,
        }, SECRET);
        res.cookie('logged_in', token, {
          maxAge: 999999999,
        }),
			 res.redirect('/profiles');
      }
    });
  }).catch(() => console.log('err'));
};
