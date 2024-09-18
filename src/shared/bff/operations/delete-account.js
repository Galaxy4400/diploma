import { api } from "../api";

export const deleteAccount = async (session, accountId) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	await api.deleteAccount(accountId);

	return {
		ok: true,
		error: null,
		data: null,
	}
}