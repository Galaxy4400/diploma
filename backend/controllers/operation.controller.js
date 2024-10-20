const Operation = require('../models/operation.model');

const getOperation = async (id) => {
	const operation = await Operation.findById(id);

	if (!operation) {
		throw new Error('Operation not found');
	}

	await operation.populate([
		{ path: 'user', select: 'login' },
		{ path: 'account', select: 'name type' },
		{ path: 'category', select: 'name icon type' },
	]);

	return operation;
};

const getOperations = async (search, { limit, page }) => {
	const [items, total] = await Promise.all([
		Operation.find(search)
			.limit(limit)
			.skip((page - 1) * limit)
			.sort({ createdAt: -1 })
			.populate([
				{ path: 'user', select: 'login' },
				{ path: 'account', select: 'name type' },
				{ path: 'category', select: 'name icon type' },
			]),
		Operation.countDocuments(search),
	]);

	return {
		items,
		total,
		page,
		limit,
		totalPages: Math.ceil(total / limit),
	};
};

const createOperation = async (userId, operationData) => {
	const operation = await Operation.create({
		...operationData,
		user: userId,
		status: true,
	});

	await operation.populate([
		{ path: 'user', select: 'login' },
		{ path: 'account', select: 'name type' },
		{ path: 'category', select: 'name icon type' },
	]);

	return operation;
};

const deleteOperation = async (id) => {
	await Operation.findByIdAndDelete(id);
};

module.exports = { getOperation, getOperations, createOperation, deleteOperation };