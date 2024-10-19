const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/', require('./auth.route'));
router.use('/users', require('./users.route'));
router.use('/accounts', require('./accounts.route'));

module.exports = router;