import { defer } from 'react-router-dom';
import { request } from 'shared/api';
import { CategoryResponse } from 'shared/api/category';
import { HasParams, ID } from 'shared/types';

const getCategory = async (categoryId: ID) => {
	const { category, error } = await request<CategoryResponse>({ url: `/categories/${categoryId}` });

	if (!category) {
		throw new Error(error || 'Unknown error');
	}

	return category;
};

export const categoryPageLoader = async ({ params }: HasParams<{ id: string }>) => {
	const id = params.id;

	if (!id) {
		throw new Error('Category ID is missing in route parameters.');
	}

	return defer({
		category: getCategory(id),
	});
};
