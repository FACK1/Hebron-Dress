const Sequelize = require('sequelize');
require('env2')('config.env');
const pg = require('pg');


pg.defaults.ssl = true;
// init sequelize
const sequelize = new Sequelize(process.env.DATABASE_URL, { logging: false, });

module.exports = sequelize;
