import { SESSION_KEY_NAME } from "../../lib/session";
import { api } from "../api";

export const getAccount = async (accountId) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		}
	}

	const [authSession, account] = await Promise.all([
		api.getSession(session), 
		api.getAccount(accountId),
	]);

	if (!account || account.userId !== authSession.userId) {
		return {
			ok: false,
			error: 'Счет не найден',
			data: null,
		}
	}

	const operations = await api.getOperations(`accountId_like=${accountId}`);

	return {
		ok: true,
		error: null,
		data: {
			...account,
			operations,
		},
	}
};