import { api } from "../api";

export const getAccount = async (session, accountId) => {

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		}
	}

	const account = await api.getAccount(accountId);

	if (!account) {
		return {
			ok: false,
			error: 'Счет не найден',
			data: null,
		}
	}

	return {
		ok: true,
		error: null,
		data: account,
	}
};