import { api } from "../api";

export const getAccounts = async (session) => {

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		}
	}

	const accounts = await api.getAccounts();

	return {
		ok: true,
		error: null,
		data: accounts,
	}
};