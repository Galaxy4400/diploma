const express = require('express');
const { updateUser } = require('../controllers/user.controller');
const authenticated = require('../middlewares/authenticated');
const userMap = require('../mappers/user.map');

const router = express.Router({ mergeParams: true });

router.patch('/:id', authenticated, async (req, res) => {
	try {
		const user = await updateUser(req.params.id, req.body);

		res.send({ error: null, user: userMap(user) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

module.exports = router;