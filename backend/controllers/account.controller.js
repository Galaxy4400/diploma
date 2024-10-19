const Account = require('../models/account.model');

const getAccounts = async (userId) => {
	const accounts = await Account.find({ user: userId }).populate('user', 'login');

	return accounts;
}

const createAccount = async (accountData) => {
	const account = await Account.create(accountData);

	return account;
}

module.exports = { getAccounts, createAccount };