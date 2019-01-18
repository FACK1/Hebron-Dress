const express = require('express');
const error = require('./error');
const home = require('./home');
const oneDress = require('./oneDress');


const router = express.Router();

router.get('/', home.get);
router.get('/oneDress/:id', oneDress.get);


router.use(error.pageNotFound);
router.use(error.serverError);
module.exports = router;
