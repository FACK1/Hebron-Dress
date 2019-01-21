const { Dress, User, } = require('../database/models');

exports.get = (req, res) => {
  const { id, } = req.params;
  Dress.findAll({

    attributes: ['user.name', 'user.mobile', 'user.email', 'img', 'color', 'size', 'price', ],
    where: { id, },
    include: [{
      model: User,
      attributes: [],

    }, ],
    raw: true,
  }).then((dresses) => {
    // res.json(dresses);
    res.render('dress', { dresses, css: 'oneDress', });
  });
};
