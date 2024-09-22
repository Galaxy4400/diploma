import { SESSION_KEY_NAME } from "../../lib/session";
import { api } from "../api";

export const deleteCategory = async (categoryId) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

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