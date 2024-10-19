const express = require('express');
const authenticated = require('../middlewares/authenticated');
const { createCategory, getCategories, getCategory, deleteCategory, updateCategory } = require('../controllers/category.controller');
const categoryMap = require('../mappers/category.map');

const router = express.Router({ mergeParams: true });

router.get('/', authenticated, async (req, res) => {
	try {
		const categories = await getCategories(req.user.id);

		res.send({ error: null, data: categories.map(categoryMap) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.get('/:id', authenticated, async (req, res) => {
	try {
		const category = await getCategory(req.params.id);

		res.send({ error: null, data: categoryMap(category) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.post('/', authenticated, async (req, res) => {
	try {
		const category = await createCategory({ ...req.body, user: req.user.id });

		res.send({ error: null, data: categoryMap(category) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.patch('/:id', authenticated, async (req, res) => {
	try {
		const category = await updateCategory(req.params.id, req.body);

		res.send({ error: null, data: categoryMap(category) });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

router.delete('/:id', authenticated, async (req, res) => {
	try {
		await deleteCategory(req.params.id);

		res.send({ error: null });
	} catch (error) {
		res.send({ error: error.message || "Unknown error" });
	}
});

module.exports = router;