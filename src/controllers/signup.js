const {
	User,
} = require('../database/models');
const sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
exports.get = (req, res, next) => {
	User.findAll()
		.then((dresses) => {
			res.render('signup', {
				dresses,
				result: 'result',
				css: 'signup',
			});
		})
		.catch((err) => {
			next(err);
		});
};
exports.post = (req, res) => {
	const {
		name,
		email,
		password,
		mobile,
		address,
		confirmpassword
	} = req.body;
	User.findOne({
		where: {
			email
		},
		attributes: ['email'],
	}).then((result) => {
		if (result) {
			res.render('signup', {
				message: 'email exsit'
			});
			return;
		}
		if (password !== confirmpassword) {
			res.render('signup', {
				message: 'password & confirme password not match'
			});
			return;
		}
		bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
			if (hashErr) res.send(hashErr);
			User.create({
					name,
					email,
					password: hashedPassword,
					mobile,
					address
				})
				.then(() => {
					res.render('login', {
						message: 'Succesfuly register'
					});
				}).catch((err) => {
					res.send(err);
				});
		});
	}).catch(err => res.send(err));
};
