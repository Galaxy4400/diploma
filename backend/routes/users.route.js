const express = require('express');
const { updateUser } = require('../controllers/user.controller');
const authenticated = require('../middlewares/authenticated');
const mapUser = require('../mappers/user.mapper');

const router = express.Router({ mergeParams: true });

router.patch('/:id', authenticated, async (req, res) => {
	try {
		const user = await updateUser(req.params.id, req.body);

		res.send({ error: null, user: mapUser(user) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

module.exports = router;