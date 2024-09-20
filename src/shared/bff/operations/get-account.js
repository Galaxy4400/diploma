import { api } from "../api";

export const getAccount = async (session, accountId) => {

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

	return {
		ok: true,
		error: null,
		data: account,
	}
};