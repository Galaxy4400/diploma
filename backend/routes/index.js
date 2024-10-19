const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/', require('./auth.router'));
router.use('/users', require('./users.router'));
router.use('/accounts', require('./accounts.router'));

module.exports = router;