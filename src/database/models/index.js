const Sequelize = require('./sequelize');
const User = require('./user');
const Dress = require('./dress');

Dress.belongsTo(User, {
  onDelete: 'CASCADE', forignKey: 'user_id', targetKey: 'id',
});

module.exports = { sequelize: Sequelize, User, Dress, };
