import { api } from "../api";

export const updateAccount = async (session, id, updatingAccountData) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	const updatedAccount = await api.updateAccount(id, updatingAccountData);

	return {
		ok: true,
		error: null,
		data: updatedAccount,
	}
}