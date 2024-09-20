import { api } from "../api";

export const getCategories = async (session) => {

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