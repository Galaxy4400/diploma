const express = require('express');
const authenticated = require('../middlewares/authenticated');
const { createAccount, getAccounts } = require('../controllers/account.controller');
const accountMap = require('../mappers/account.map');

const router = express.Router({ mergeParams: true });

router.get('/', authenticated, async (req, res) => {
	try {
		const accounts = await getAccounts(req.user.id);

		res.send({ error: null, data: accounts.map(accountMap) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.get('/:id', authenticated, async (req, res) => {
});

router.post('/', authenticated, async (req, res) => {
	try {
		const account = await createAccount({ ...req.body, user: req.user.id });

		res.send({ error: null, data: accountMap(account) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.patch('/:id', authenticated, async (req, res) => {
});

router.delete('/:id', authenticated, async (req, res) => {
});

module.exports = router;