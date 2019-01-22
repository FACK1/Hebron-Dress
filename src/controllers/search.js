const sequelize = require('sequelize');
const { Dress, } = require('../database/models');

const Op = sequelize.Op;

exports.get = (req, res, next) => {
// search query

  const {
    color, size, status, category, price,
  } = req.query;
  let query = {};
  let priceSel = price;
  console.log(status);

  const selected = color === 'color' ? { $like: '%%', } : color;
  const sizeSel = size === 'size' ? { $like: '%%', } : size;
  const categorySel = category === 'category' ? { $like: '%%', } : category;

  const min = price.split('-')[0];
  const max = price.split('-')[1];
  if (max <= 1000) {
    priceSel = { [Op.between]: [min, max,], };
  } else if (price === 'price') {
    priceSel = { [Op.gte]: 0, };
  } else {
    priceSel = { [Op.gte]: 1000, };
  }

  if (status === 'Rent') {
    query = {
      color: selected, size: sizeSel, for_rent: true, for_sale: false, available: true, category: categorySel, price: priceSel,
    };
  } else if (status === 'Sale') {
    query = {
      color: selected, size: sizeSel, for_rent: false, for_sale: true, available: false, category: categorySel, price: priceSel,
    };
  } else if (status === 'status' || status === 'Both') {
    query = {
      color: selected, size: sizeSel, category: categorySel, price: priceSel,
    };
  }
  Dress.findAll({ where: query, }).then((dresses) => {
    res.render('product', { dresses, css: 'product', });
  }).catch((error) => {
    next(error);
  });
};
