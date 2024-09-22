import { SESSION_KEY_NAME } from "../../lib/session";
import { api } from "../api";

export const getCategories = async () => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		}
	}

	const authSession = await api.getSession(session);

	const categories = await api.getCategories(`userId_like=${authSession.userId}`);

	return {
		ok: true,
		error: null,
		data: categories,
	}
};