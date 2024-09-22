import { SESSION_KEY_NAME } from "../../lib/session";
import { api } from "../api";

export const updateAccount = async (accountId, updatingAccountData) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

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