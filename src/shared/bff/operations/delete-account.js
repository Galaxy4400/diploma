import { api } from "../api";

export const deleteAccount = async (session, accountId, userId) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	const account = await api.getAccount(accountId);

	if (!account || account.userId !== userId) {
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