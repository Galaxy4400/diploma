import { SESSION_KEY_NAME } from "../../lib/session";
import { api } from "../api";

export const createAccount = async (accountData) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

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