import { SESSION_KEY_NAME } from '../../lib/session';
import { api } from '../api';

export const getAccounts = async () => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

	if (!session) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		};
	}

	const authSession = await api.getSession(session);

	if (!authSession) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		};
	}

	const accounts = await api.getAccounts(`userId_like=${authSession.userId}`);

	return {
		ok: true,
		error: null,
		data: accounts,
	};
};
