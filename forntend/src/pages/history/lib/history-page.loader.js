import { defer } from 'react-router-dom';
import { server } from '../../../shared/bff';
import { OPERATIONS_PER_LOAD } from '../../../entities/operation';

const getOperations = async () => {
	const response = await server.getOperations({ limit: OPERATIONS_PER_LOAD });

	return response.data;
};

export const historyPageLoader = async () => {
	return defer({
		operations: getOperations(),
	});
};
