import { api } from "../api";

export const getCategory = async (session, categoryId) => {

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		}
	}

	const [authSession, category] = await Promise.all([
		api.getSession(session), 
		api.getCategory(categoryId),
	]);

	if (!category || category.userId !== authSession.userId) {
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