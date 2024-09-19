import { api } from "../api";

export const getOperations = async (session, userId, accountId) => {
	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		}
	}

	const searchProps = [];
	if (userId) searchProps.push(`userId_like=${userId}`);
	if (accountId) searchProps.push(`accountId_like=${accountId}`);

	const operations = await api.getOperations(searchProps.join('&'));

	return {
		ok: true,
		error: null,
		data: operations,
	}
};