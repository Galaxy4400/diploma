import { defer } from 'react-router-dom';
import { request } from 'shared/api';
import { OPERATIONS_PER_LOAD, OperationsResponse } from 'entities/operation';
import { AccountsResponse } from 'entities/account';
import { CategoriesResponse } from 'entities/category';

const getAccounts = async () => {
	const { accounts } = await request<AccountsResponse>({ url: '/accounts' });

	if (!accounts) {
		throw new Error('Error loading data: accounts information not found.');
	}

	return accounts;
};

const getOperations = async () => {
	const { pagingData } = await request<OperationsResponse>({
		url: '/operations',
		query: { limit: OPERATIONS_PER_LOAD },
	});

	if (!pagingData) {
		throw new Error('Error loading data: pagingData information not found.');
	}

	return pagingData.items;
};

const getCategories = async () => {
	const { categories } = await request<CategoriesResponse>({ url: '/categories' });

	if (!categories) {
		throw new Error('Error loading data: categories information not found.');
	}

	return categories;
};

export const mainPageLoader = async () => {
	return defer({
		accounts: getAccounts(),
		operations: getOperations(),
		categories: getCategories(),
	});
};
