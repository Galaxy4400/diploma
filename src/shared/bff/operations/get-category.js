import { api } from "../api";

export const getCategory = async (session, categoryId, userId) => {

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		}
	}

	const category = await api.getCategory(categoryId);

	if (!category || category.userId !== userId) {
		return {
			ok: false,
			error: 'Категория не найдена',
			data: null,
		}
	}

	return {
		ok: true,
		error: null,
		data: category,
	}
};