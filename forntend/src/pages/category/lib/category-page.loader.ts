import { defer } from 'react-router-dom';
import { request } from '../../../shared/api';
import { HasParams } from 'shared/types';
import { CategoryResponse } from 'entities/category';

export const categoryPageLoader = async ({ params }: HasParams<{ id: string }>) => {
	const id = params.id;

	if (!id) {
		throw new Error('Category ID is missing in route parameters.');
	}

	return defer({
		category: await request<CategoryResponse>({ url: `/categories/${id}` }),
	});
};
