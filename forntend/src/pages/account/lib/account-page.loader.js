import { defer } from 'react-router-dom';
import { server } from '../../../shared/bff';
import { OPERATIONS_PER_LOAD } from '../../../entities/operation';

const getAccount = async (id) => {
	const response = await server.getAccount(id, OPERATIONS_PER_LOAD);

	return response.data;
};

export const accountPageLoader = async ({ params }) => {
	const id = params.id;

	return defer({
		id,
		account: getAccount(id),
	});
};
