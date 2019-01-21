const express = require('express');
const error = require('./error');
const home = require('./home');
const profiles = require('./profile');
const signups = require('./signup');
const logins = require('./login');
const logouts = require('./logout');
const products = require('./products');



const router = express.Router();

router.get('/', home.get);
router.get('/profiles', profiles.get);
router.get('/signups', signups.get);
router.post('/signups', signups.post);
router.get('/logins', logins.get);
router.post('/logins', logins.post);
router.get('/logouts', logouts.get);
router.get('/products', products.get);



router.use(error.pageNotFound);
router.use(error.serverError);
module.exports = router;
