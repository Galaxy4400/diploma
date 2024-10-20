import { defer } from 'react-router-dom';
import { OPERATIONS_PER_LOAD } from '../../../entities/operation';

const getAccounts = async () => {
	// const response = await server.getAccounts();
	// return response.data;
};

const getOperations = async () => {
	// const response = await server.getOperations({ limit: OPERATIONS_PER_LOAD });
	// return response.data;
};

const getCategories = async () => {
	// const response = await server.getCategories();
	// return response.data;
};

export const mainPageLoader = async () => {
	return defer({
		accounts: getAccounts(),
		operations: getOperations(),
		categories: getCategories(),
	});
};
