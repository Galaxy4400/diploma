const express = require('express');
const authenticated = require('../middlewares/authenticated');
const { createOperation, getOperations, getOperation, deleteOperation, updateOperation } = require('../controllers/operation.controller');
// const operationMap = require('../mappers/operation.map');

const router = express.Router({ mergeParams: true });

router.get('/', authenticated, async (req, res) => {
	try {
		const operations = await getOperations(req.user.id);

		res.send({ error: null, data: operations });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.get('/:id', authenticated, async (req, res) => {
	try {
		const operation = await getOperation(req.params.id);

		res.send({ error: null, data: operation });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.post('/', authenticated, async (req, res) => {
	try {
		const operation = await createOperation({ ...req.body, user: req.user.id });

		res.send({ error: null, data: operation });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.patch('/:id', authenticated, async (req, res) => {
	try {
		const operation = await updateOperation(req.params.id, req.body);

		res.send({ error: null, data: operation });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.delete('/:id', authenticated, async (req, res) => {
	try {
		await deleteOperation(req.params.id);

		res.send({ error: null });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

module.exports = router;