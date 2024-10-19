const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/', require('./auth.router'));
router.use('/users', require('./users.router'));
router.use('/accounts', require('./accounts.router'));
router.use('/categories', require('./categories.router'));

module.exports = router;