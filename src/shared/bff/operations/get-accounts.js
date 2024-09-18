import { api } from "../api";

export const getAccounts = async (session, userId) => {

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		}
	}

	const accounts = await api.getAccounts(`userId_like=${userId}`);

	return {
		ok: true,
		error: null,
		data: accounts,
	}
};