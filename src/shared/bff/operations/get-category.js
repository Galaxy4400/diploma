import { SESSION_KEY_NAME } from "../../lib/session";
import { api } from "../api";

export const getCategory = async (categoryId) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

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