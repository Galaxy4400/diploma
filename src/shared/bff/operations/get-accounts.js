import { api } from "../api";

export const getAccounts = async (session) => {

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		}
	}

	const authSession = await api.getSession(session);

	const accounts = await api.getAccounts(`userId_like=${authSession.userId}`);

	return {
		ok: true,
		error: null,
		data: accounts,
	}
};