import { defer } from 'react-router-dom';
import { server } from '../../../shared/bff';

const getOperations = async () => {
	const response = await server.getOperations();

	return response.data;
};

export const historyPageLoader = async () => {
	return defer({
		operations: getOperations(),
	});
};
