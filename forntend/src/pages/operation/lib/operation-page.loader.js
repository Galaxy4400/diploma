import { defer } from 'react-router-dom';

const getOperation = async (id) => {
	// const response = await server.getOperation(id);
	// return response.data;
};

export const operationPageLoader = async ({ params }) => {
	const id = params.id;

	return defer({
		operation: getOperation(id),
	});
};
