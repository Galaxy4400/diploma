import { defer } from 'react-router-dom';

const getCategory = async (id) => {
	// const response = await server.getCategory(id);
	// return response.data;
};

export const analyticsPageLoader = async ({ params }) => {
	const id = params.id;

	return defer({
		category: getCategory(id),
	});
};
