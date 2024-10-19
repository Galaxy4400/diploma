const Operation = require('../models/operation.model');

const getOperation = async (id) => {
	const operation = await Operation.findById(id);

	if (!operation) {
		throw new Error('Operation not found');
	}

	await operation.populate([
		{ path: 'user', select: 'login' },
		{ path: 'account', select: 'name' },
		{ path: 'category', select: 'name' },
	]);

	return operation;
};

const getOperations = async (userId) => {
	const operations = await Operation.find({ user: userId }).populate([
		{ path: 'user', select: 'login' },
		{ path: 'account', select: 'name' },
		{ path: 'category', select: 'name' },
	]);

	return operations;
};

const createOperation = async (userId, accountId, categoryId, operationData) => {
	const operation = await Operation.create({
		...operationData,
		user: userId,
		account: accountId,
		category: categoryId,
		status: true,
	});

	await operation.populate([
		{ path: 'user', select: 'login' },
		{ path: 'account', select: 'name' },
		{ path: 'category', select: 'name' },
	]);

	return operation;
};

const deleteOperation = async (id) => {
	await Operation.findByIdAndDelete(id);
};

module.exports = { getOperation, getOperations, createOperation, deleteOperation };