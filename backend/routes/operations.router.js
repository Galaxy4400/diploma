const express = require('express');
const authenticated = require('../middlewares/authenticated');
const { createOperation, getOperations, getOperation, deleteOperation } = require('../controllers/operation.controller');
const operationMap = require('../mappers/operation.map');

const router = express.Router({ mergeParams: true });

router.use(authenticated);

router.get('/', async (req, res) => {
	try {
		const operations = await getOperations(req.user.id);

		res.send({ error: null, data: operations.map(operationMap) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const operation = await getOperation(req.params.id);

		res.send({ error: null, data: operationMap(operation) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.post('/account/:accountId/category/:categoryId', async (req, res) => {
	try {
		const operation = await createOperation(req.user.id, req.params.accountId, req.params.categoryId, req.body);

		res.send({ error: null, data: operationMap(operation) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await deleteOperation(req.params.id);

		res.send({ error: null });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

module.exports = router;