const { Dress, } = require('../database/models');
const sequelize = require('sequelize');

exports.get = (req, res, next) => {
Dress.findAll()
.then((dresses) => {
res.render('profile', { dresses, result: 'result', css: 'profile', });
})
.catch((err) => {
next(err);
});
};
