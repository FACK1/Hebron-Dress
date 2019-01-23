const { Dress, User, } = require('../database/models');


exports.get = (req, res) => {
  const logged = !!req.cookies.logged_in;
  const { id, } = req.params;
  Dress.findAll({

    attributes: ['user.name', 'user.mobile', 'user.email', 'img', 'color', 'size', 'price', ],
    where: { id, },
    include: [{
      model: User,
      attributes: [],

    },],
    raw: true,
  }).then((dresses) => {
    res.render('dress', { dresses, css: 'oneDress', logged, });
  });
};
