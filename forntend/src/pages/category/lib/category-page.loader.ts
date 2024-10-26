import { defer } from 'react-router-dom';
import { request } from '../../../shared/api';
import { HasParams, ID } from 'shared/types';
import { CategoryResponse } from 'entities/category';

const getCategory = async (categoryId: ID) => {
	const { category } = await request<CategoryResponse>({ url: `/categories/${categoryId}` });

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
