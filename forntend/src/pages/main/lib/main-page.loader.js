import { defer } from 'react-router-dom';
import { OPERATIONS_PER_LOAD } from '../../../entities/operation';
import { request } from '../../../shared/api';

const getAccounts = async () => {
	const { data } = await request({ url: '/accounts' });

	return data;
};

const getOperations = async () => {
	const { data } = await request({ url: '/operations' });

	return data;
};

const getCategories = async () => {
	const { data } = await request({ url: '/categories' });

	return data;
};

export const mainPageLoader = async () => {
	return defer({
		accounts: getAccounts(),
		operations: getOperations(),
		categories: getCategories(),
	});
};
