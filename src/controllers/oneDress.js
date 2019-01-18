const { Dress, } = require('../database/models');

exports.get = (req, res, next) => {
  const { params: { id, }, } = req;
  Dress.findAll({
    where: { dressId: id, },
    attributes: [['id', 'size', 'price', 'img',],],
    raw: true,
  })
    .then((dresses) => {
      res.render('oneDress', { dresses, result: 'result', css: 'oneDress', });
    })
    .catch((err) => {
      next(err);
    });
};
// exports.get = (req, res, next) => {
//   Dress.findAll()
//     .then((dresses) => {
//       res.render('oneDress', { dresses, result: 'result', css: 'oneDress', });
//     })
//     .catch((err) => {
//       next(err);
//     });
// };
//  const { Dress, } = require('../database/models');
//
// const get = async function(req, res) {
//     let id = req.params.id;
//
//     [err, oneDress] = await to(Dress.findByPk(id, { raw : true }));
//
//     return ReS(res const { Dress, } = require('../database/models');
// , { JSON.stringify(oneDress) });
// }
