const express = require('express');
const authenticated = require('../middlewares/authenticated');
const { createAccount, getAccounts, getAccount, deleteAccount, updateAccount } = require('../controllers/account.controller');
const accountMap = require('../mappers/account.map');

const router = express.Router({ mergeParams: true });

router.use(authenticated);

router.get('/', async (req, res) => {
	try {
		const accounts = await getAccounts(req.user.id);

		res.send({ error: null, accounts: accounts.map(accountMap) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const account = await getAccount(req.params.id);

		res.send({ error: null, account: accountMap(account) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.post('/', async (req, res) => {
	try {
		const account = await createAccount({ ...req.body, user: req.user.id });

		res.send({ error: null, account: accountMap(account) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.patch('/:id', async (req, res) => {
	try {
		const account = await updateAccount(req.params.id, req.body);

		res.send({ error: null, account: accountMap(account) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await deleteAccount(req.params.id);

		res.send({ error: null });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

module.exports = router;