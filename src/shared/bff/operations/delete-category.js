import { api } from "../api";

export const deleteCategory = async (session, categoryId) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
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
			error: 'Такой категории не существует',
			data: null,
		}
	}

	await api.deleteCategory(categoryId);

	return {
		ok: true,
		error: null,
		data: null,
	}
}