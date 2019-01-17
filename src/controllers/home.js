const { Dress, } = require('../database/models');

exports.get = (req, res, next) => {
  Dress.findAll({ order: [['createdAt', 'DESC',],], limit: 6, })
    .then((dresses) => {
      const dresses1 = dresses.slice(0, 3);
      const dresses2 = dresses.slice(3, 6);
      res.render('home', { dresses1, dresses2, });
    })
    .catch((err) => {
      next(err);
    });
};
