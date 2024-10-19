const Operation = require('../models/operation.model');

const getOperation = async (id) => {
	const operation = await Operation.findById(id);

	if (!operation) {
		throw new Error('Operation not found');
	}

	await operation.populate('user', 'login');

	return operation;
};

const getOperations = async (userId) => {
	const operations = await Operation.find({ user: userId }).populate('user', 'login');

	return operations;
};

const createOperation = async (operationData) => {
	const operation = await Operation.create(operationData);

	await operation.populate('user', 'login');

	return operation;
};

const updateOperation = async (id, operationData) => {
	const operation = await Operation.findByIdAndUpdate(id, operationData, { returnDocument: 'after' });

	if (!operation) {
		throw new Error('Operation not found');
	}

	await operation.populate('user', 'login');

	return operation;
};

const deleteOperation = async (id) => {
	await Operation.findByIdAndDelete(id);
};

module.exports = { getOperation, getOperations, createOperation, updateOperation, deleteOperation };