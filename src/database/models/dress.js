const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');

const User = require('./user.js');

const Dress = sequelize.define('dresses', {
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
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
});
module.exports = Dress;
