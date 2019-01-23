const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const { Dress, User, } = require('../database/models');

const { SECRET, } = process.env;

exports.get = (req, res) => {
  res.render('add', { css: 'add', });
};

exports.post = (req, res) => {
  const {
    image, color, size, status, category, address, mobile,
  } = req.body;
  if (req.headers.cookie) {
    const token = cookie.parse(req.headers.cookie).logged_in;
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) { throw new Error(err); }
      const userId = decoded.id;
      Dress.create({
        image,
        color,
        size,
        status,
        category,
        address,
        mobile,
        userId,
        userId: 5,
        raw: true,
      })
        .then((result) => {
          User.create({
            name, image, DressId: result.dataValues.id,
          })
            .then(() => res.render('add', { message: 'Done ', })).catch(() => {
              res.render('serverError');
            });
        }).catch(() => {
          res.render('serverError');
        });
    });
  }
};
