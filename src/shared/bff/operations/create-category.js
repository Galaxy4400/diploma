import { SESSION_KEY_NAME } from '../../lib/session';
import { api } from '../api';

export const createCategory = async (categoryData) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		};
	}

	const createdCategory = await api.createCategory(categoryData);

	return {
		ok: true,
		error: null,
		data: createdCategory,
	};
};
