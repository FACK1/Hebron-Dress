const express = require('express');
const error = require('./error');
const home = require('./home');
const profiles = require('./profile');
const signups = require('./signup');
const logins = require('./login');
const logouts = require('./logout');
const validate = require('../validation/validate.js');
const { signupValidation,loginValidation} = require('../validation/server-side');
const cookiesValidator = require('../validation/cookieValidator.js');
const oneDress = require('./oneDress');
const products = require('./products');
const search = require('./search');
const router = express.Router();




router.get('/', home.get);
router.get('/profiles', cookiesValidator,profiles.get);
router.get('/signups', signups.get);
router.post('/signups',validate(signupValidation),signups.post);
router.get('/logins', logins.get);
router.post('/logins',  validate(loginValidation),logins.post);
router.get('/logouts', logouts.get);
router.get('/products', products.get);
router.get('/search', search.get);
router.get('/oneDress/:id', oneDress.get);



router.use(error.pageNotFound);
router.use(error.serverError);
module.exports = router;
