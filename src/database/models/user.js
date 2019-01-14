const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');

const User = sequelize.define('users', {

  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(150),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(250),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(250),
    allowNull: false,
  },
  mobile: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

exports.module = User;
