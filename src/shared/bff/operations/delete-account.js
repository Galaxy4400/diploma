import { api } from "../api";

export const deleteAccount = async (session, accountId) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
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
			error: 'Такого счета не существует',
			data: null,
		}
	}

	const accountOperatins = await api.getOperations(`accountId=${accountId}`);

	await Promise.all(accountOperatins.map(operation => api.deleteOperation(operation.id)));

	await api.deleteAccount(accountId);

	return {
		ok: true,
		error: null,
		data: null,
	}
}