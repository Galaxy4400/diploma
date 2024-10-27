import { defer } from 'react-router-dom';
import { request } from 'shared/api';
import { OPERATIONS_PER_LOAD, OperationsResponse } from 'entities/operation';
import { getAccounts } from 'shared/api/account';
import { getCategories } from 'shared/api/category';

const processGetAccounts = async () => {
	const { accounts, error } = await getAccounts();

	if (!accounts) {
		throw new Error(error || 'Unknown error');
	}

	return accounts;
};

const getOperations = async () => {
	const { pagingData, error } = await request<OperationsResponse>({
		url: '/operations',
		query: { limit: OPERATIONS_PER_LOAD },
	});

	if (!pagingData) {
		throw new Error(error || 'Unknown error');
	}

	return pagingData.items;
};

const processGetCategories = async () => {
	const { categories, error } = await getCategories();

	if (!categories) {
		throw new Error(error || 'Unknown error');
	}

	return categories;
};

export const mainPageLoader = async () => {
	return defer({
		accounts: processGetAccounts(),
		operations: getOperations(),
		categories: processGetCategories(),
	});
};
