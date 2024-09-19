import { api } from "../api";

export const updateAccount = async (session, accountId, updatingAccountData) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	const updatedAccount = await api.updateAccount(accountId, updatingAccountData);

	return {
		ok: true,
		error: null,
		data: updatedAccount,
	}
}