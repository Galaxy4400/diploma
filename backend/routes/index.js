const express = require('express');

const router = express.Router({ mergeParams: true });

router.use('/', require('./auth.route'));
router.use('/users', require('./users.route'));

module.exports = router;