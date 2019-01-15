const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');


const Dress = sequelize.define('dress', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  img: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  size: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  color: {
    type: Sequelize.STRING(150),
    allowNull: false,
  },
  for_rent: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  for_sale: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  available: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

});
module.exports = Dress;
