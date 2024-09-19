import { api } from "../api";

export const getOperations = async (session, userId, accountId) => {
	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		}
	}

	const operations = await api.getOperations(`userId_like=${userId}&accountId_like=${accountId}`);

	return {
		ok: true,
		error: null,
		data: operations,
	}
};