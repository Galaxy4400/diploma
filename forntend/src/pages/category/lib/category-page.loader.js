import { defer } from 'react-router-dom';
import { request } from '../../../shared/api';

const getCategory = async (categoryId) => {
	const { category } = await request({ url: `/categories/${categoryId}` });

	return category;
};

export const categoryPageLoader = async ({ params }) => {
	const id = params.id;

	return defer({
		category: getCategory(id),
	});
};
