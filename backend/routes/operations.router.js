const express = require('express');
const authenticated = require('../middlewares/authenticated');
const { createOperation, getOperations, getOperation, deleteOperation } = require('../controllers/operation.controller');
const operationMap = require('../mappers/operation.map');
const { buildOperationsSearch } = require('../services/build-operations-search');
const { buildPagination } = require('../services/build-pagination');

const router = express.Router({ mergeParams: true });

router.use(authenticated);

router.get('/', async (req, res) => {
	try {
		const pagination = buildPagination();
		const search = buildOperationsSearch(req);

		const operationsPagination = await getOperations(search, pagination);

		res.send({ error: null, pagingData: {
			...operationsPagination,
			items: operationsPagination.items.map(operationMap),
		} });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.get('/account/:accountId', async (req, res) => {
	try {
		const pagination = buildPagination();

		const search = {
			user: req.user.id,
			account: req.params.accountId,
		}

		const operationsPagination = await getOperations(search, pagination);

		res.send({ error: null, pagingData: {
			...operationsPagination,
			items: operationsPagination.items.map(operationMap),
		} });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const operation = await getOperation(req.params.id);

		res.send({ error: null, operation: operationMap(operation) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.post('/', async (req, res) => {
	try {
		const operation = await createOperation(req.user.id, req.body);

		res.send({ error: null, operation: operationMap(operation) });
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