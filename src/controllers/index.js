const express = require('express');
const error = require('./error');
const home = require('./home');
const profile = require('./profile');
const add = require('./add');


const router = express.Router();

router.get('/', home.get);
router.get('/profile', profile.get);
router.post('/add', add.post);

router.use(error.pageNotFound);
router.use(error.serverError);
module.exports = router;
