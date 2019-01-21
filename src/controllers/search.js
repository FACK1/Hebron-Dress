
const { Dress, } = require('../database/models');

exports.get('/search', (req, res, next) => {
// search query

  const { color, size, status, } = req.query;
  let selected = color;
  let sizeSel = size;
  let for_rent; let for_sale;
  let available;
  let query = {};
  if (color === 'color') {
    selected = { $like: '%%', };
  } if (size === 'size') {
    sizeSel = { $like: '%%', };
  }
  if (status === 'rent') {
    for_rent = true;
    for_sale = false;
    available = true;
  }
  if (status === 'sale') {
    for_rent = false;
    for_sale = true;
    available = false;
  }
  if (status === 'both') {
    for_rent = true;
    for_sale = true;
    available = true;
  }
  if (status === 'status') {
    query = { color: selected, size: sizeSel, };
  } else {
    query = {
      color: selected, size: sizeSel, for_rent, for_sale, available,
    };
  }
  Dress.findAll({ where: query, }).then((dresses) => {
    res.render('product', { dresses, });
  }).catch((error) => {
    next(error);
  });
});
