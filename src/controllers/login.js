const {
	User,
} = require('../database/models');
const sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {
	SECRET
} = process.env;

exports.get = (req, res, next) => {
	User.findAll()
		.then((dresses) => {
			res.render('login', {
				dresses,
				result: 'result',
				css: 'login',
			});
		})
		.catch((err) => {
			next(err);
		});
};


exports.post = (req, res) => {
	const {
		email,
		password,
	} = req.body;
	User.findOne({
		where: {
			email
		},
		attributes: ['id', 'email', 'password'],
		raw: true,
	}).then((result) => {
		if (!result) {
			res.render('login', {
				message: 'email or password not match'
			});
			return;
		}
		bcrypt.compare(password, result.password, (err, result2) => {
			if (err) {
				res.send(err);
			}
			if (!result2) {
				res.render('login', {
					message: 'email or password not match'
				});
			}
			if (result2) {
				const token = jwt.sign({
					id: result.id,
					email
				}, SECRET);
				res.cookie('logged_in', token, {
					maxAge: 999999999
				}).render('profile');
			}
		});
	}).catch(() => console.log('err'));
};
