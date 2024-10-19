const Account = require('../models/account.model');

const getAccount = async (id) => {
	const account = await Account.findById(id);

	if (!account) {
		throw new Error('Account not found');
	}

	await account.populate('user', 'login');

	return account;
};

const getAccounts = async (userId) => {
	const accounts = await Account.find({ user: userId }).populate('user', 'login');

	return accounts;
};

const createAccount = async (accountData) => {
	const account = await Account.create(accountData);

	await account.populate('user', 'login');

	return account;
};

const updateAccount = async (id, accountData) => {
	const account = await Account.findByIdAndUpdate(id, accountData, { returnDocument: 'after' });

	await account.populate('user', 'login');

	return account;
};

const deleteAccount = async (id) => {
	await Account.findByIdAndDelete(id);
};

module.exports = { getAccount, getAccounts, createAccount, updateAccount, deleteAccount };