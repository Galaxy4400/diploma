import { OPERATIONS_PER_LOAD } from 'entities/operation/operation-data';
import { defer } from 'react-router-dom';
import { getAccounts } from 'shared/api/account';
import { getCategories } from 'shared/api/category';
import { getOperations } from 'shared/api/operation';

const processGetAccounts = async () => {
	const { accounts, error } = await getAccounts();

	if (!accounts) {
		throw new Error(error || 'Unknown error');
	}

	return accounts;
};

const processGetOperations = async () => {
	const { pagingData, error } = await getOperations({ limit: OPERATIONS_PER_LOAD });

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
		operations: processGetOperations(),
		categories: processGetCategories(),
	});
};
