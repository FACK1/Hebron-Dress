const { Dress, } = require('../database/models');

exports.get = (req, res, next) => {
  Dress.findAll({ order: [['createdAt', 'DESC', ],], limit: 6, })
    .then((dresses) => {
      const dresses1 = dresses.slice(0, 3);
      const dresses2 = dresses.slice(3, 6);
      const logged = !!req.cookies.logged_in;
      res.render('home', {
        dresses1, dresses2, css: 'style', logged,
      });
    })
    .catch((err) => {
      next(err);
    });
};
