import { SESSION_KEY_NAME } from '../../lib/session';
import { api } from '../api';

export const getOperations = async (accountId) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		};
	}

	const authSession = await api.getSession(session);

	const searchProps = [];
	if (authSession?.userId) searchProps.push(`userId_like=${authSession.userId}`);
	if (accountId) searchProps.push(`accountId_like=${accountId}`);

	const operations = await api.getOperations(searchProps.join('&'));

	return {
		ok: true,
		error: null,
		data: operations,
	};
};
