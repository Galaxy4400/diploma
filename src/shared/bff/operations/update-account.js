import { api } from "../api";

export const updateAccount = async (session, accountId, updatingAccountData) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}
	
	const authSession = await api.getSession(session);
	
	if (!authSession?.userId) {
		return {
			ok: false,
			error: 'Такого счета не существует',
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