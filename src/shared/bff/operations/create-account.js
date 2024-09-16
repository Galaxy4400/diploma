import { api } from "../api";

export const createAccount = async (session, accountData) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	const createdAccount = await api.createAccount(accountData);

	return {
		ok: true,
		error: null,
		data: createdAccount,
	}
}