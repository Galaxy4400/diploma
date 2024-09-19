import { api } from "../api";

export const createCategory = async (session, categoryData) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	const createdCategory = await api.createCategory(categoryData);

	return {
		ok: true,
		error: null,
		data: createdCategory,
	}
}