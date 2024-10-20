const Operation = require('../models/operation.model');
const Account = require('../models/account.model');
const Category = require('../models/category.model');
const CATEGORY_TYPE = require('../constants/category-type');

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
	const [account, category] = await Promise.all([
		Account.findById(operationData.account),
		Category.findById(operationData.category),
	]);

	const newAccountAmount = (category.type === CATEGORY_TYPE.INCOME)
		? account.amount + operationData.amount
		: account.amount - operationData.amount;

	const isAmountPositive = newAccountAmount >= 0;

	if (isAmountPositive) {
		await Account.findByIdAndUpdate(account.id, { amount: newAccountAmount });
	}

	const operation = await Operation.create({
		...operationData,
		user: userId,
		status: isAmountPositive,
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