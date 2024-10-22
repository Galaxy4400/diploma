const express = require('express');
const { updateUser, deleteUser, getUsers } = require('../controllers/user.controller');
const authenticated = require('../middlewares/authenticated');
const userMap = require('../mappers/user.map');

const router = express.Router({ mergeParams: true });

router.use(authenticated);

if (process.env.NODE_ENV === 'development') {
	router.get('/', async (req, res) => {
		try {
			const users = await getUsers();
	
			res.send({ error: null, users: users.map(userMap) });
		} catch (error) {
			res.send({ error: error.message || "Unknown error" });
		}
	});
}

router.patch('/:id', async (req, res) => {
	try {
		const user = await updateUser(req.params.id, req.body);

		res.send({ error: null, user: userMap(user) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await deleteUser(req.params.id);

		res.send({ error: null });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

module.exports = router;