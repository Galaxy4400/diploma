import { defer } from 'react-router-dom';
import { server } from '../../../shared/bff';

const getAccounts = async () => {
	const response = await server.getAccounts();

	return response.data;
};

const getCategories = async () => {
	const response = await server.getCategories();

	return response.data;
};

export const mainPageLoader = async () => {
	return defer({
		accounts: getAccounts(),
		categories: getCategories(),
	});
};
