const sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const {
  User,
} = require('../database/models');

exports.get = (req, res, next) => {
  User.findAll()
    .then((dresses) => {
      res.render('signup', {
        dresses,
        result: 'result',
        css: 'signup',
      });
    })
    .catch((err) => {
      next(err);
    });
};
exports.post = (req, res) => {
  const {
    name,
    email,
    password,
    mobile,
    address,
    confirmpassword,
  } = req.body;
  User.findOne({
    where: {
      email,
    },
    attributes: ['email', ],
  }).then((result) => {
    if (result) {
      res.render('signup', {
        css: 'signup',
        message: 'email exsit',
      });
      return;
    }

    if (!mobile.match(/^-{0,1}\d+$/)) {
      res.render('signup', {
        css: 'signup',
        messagemobile: 'your mobile is not correct',
      });
      return;
    }

    if (password !== confirmpassword) {
      res.render('signup', {
        css: 'signup',
        messagePassword: 'password & confirm password not match',
      });
      return;
    }
    bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
      if (hashErr) res.send(hashErr);
      User.create({
        name,
        email,
        password: hashedPassword,
        mobile,
        address,
      })
        .then(() => {
          res.render('login', {
            css: 'login',
            messageSuccess: 'Succesfuly register',

          });
        }).catch((err) => {
          res.send(err);
        });
    });
  }).catch(err => res.send(err));
};
