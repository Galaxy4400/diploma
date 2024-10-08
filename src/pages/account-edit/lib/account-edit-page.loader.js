import { defer } from 'react-router-dom';
import { server } from '../../../shared/bff';

const getAccount = async (id) => {
	const response = await server.getAccount(id);

	return response.data;
};

export const accountEditPageLoader = async ({ params }) => {
	const id = params.id;

	return defer({
		account: getAccount(id),
	});
};
