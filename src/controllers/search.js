const sequelize = require('sequelize');
const { Dress, } = require('../database/models');

const Op = sequelize.Op;

exports.get = (req, res, next) => {
// search query

  const {
    color, size, status, category, price,
  } = req.query;
  let selected = color;
  let sizeSel = size;
  let for_rent; let for_sale;
  let available;
  let categorySel = category;
  let priceSel = price;
  let query = {};


  selected = color === 'color' ? { $like: '%%', } : color;
  sizeSel = size === 'size' ? { $like: '%%', } : size;
  categorySel = category === 'category' ? { $like: '%%', } : category;

  const min = price.split('-')[0];
  const max = price.split('-')[1];
  if (max < 1000) {
    priceSel = { [Op.between]: [min, max,], };
  } else if (price === 'price') {
    priceSel = { [Op.gte]: 0, };
  } else {
    priceSel = { [Op.gte]: 1000, };
  }

  if (status === 'rent') {
    for_rent = true;
    for_sale = false;
    available = true;
  } else if (status === 'sale') {
    for_rent = false;
    for_sale = true;
    available = false;
  } else if (status === 'both') {
    for_rent = true;
    for_sale = true;
    available = true;
  } else if (status === 'status') {
    query = {
      color: selected, size: sizeSel, category: categorySel, price: priceSel,
    };
  } else {
    query = {
      color: selected, size: sizeSel, for_rent, for_sale, available, category: categorySel, priceSel: price,
    };
  }
  Dress.findAll({ where: query, }).then((dresses) => {
    res.render('product', { dresses, css: 'product', });
  }).catch((error) => {
    next(error);
  });
};
