const express = require('express');
const error = require('./error');
const home = require('./home');

const router = express.Router();

router.get('/', home.get);
router.get('/search', search.get);

router.use(error.pageNotFound);
router.use(error.serverError);
module.exports = router;
