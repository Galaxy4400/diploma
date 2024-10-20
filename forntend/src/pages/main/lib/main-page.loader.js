import { defer } from 'react-router-dom';
import { OPERATIONS_PER_LOAD } from '../../../entities/operation';
import { request } from '../../../shared/api';

const getAccounts = async () => {
	const { accounts } = await request({ url: '/accounts' });

	return accounts;
};

const getOperations = async () => {
	const { pagingData } = await request({ url: '/operations', query: { limit: OPERATIONS_PER_LOAD } });

	return pagingData.items;
};

const getCategories = async () => {
	const { categories } = await request({ url: '/categories' });

	return categories;
};

export const mainPageLoader = async () => {
	return defer({
		accounts: getAccounts(),
		operations: getOperations(),
		categories: getCategories(),
	});
};
