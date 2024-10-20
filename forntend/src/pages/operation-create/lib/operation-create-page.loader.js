import { defer } from 'react-router-dom';

const getAccounts = async () => {
	// const response = await server.getAccounts();
	// return response.data;
};

const getCategories = async () => {
	// const response = await server.getCategories();
	// return response.data;
};

const getData = async () => {
	return {
		accounts: await getAccounts(),
		categories: await getCategories(),
	};
};

export const operationCreatePageLoader = async () => {
	return defer({
		selectorsData: getData(),
	});
};
