import { SESSION_KEY_NAME } from '../../lib/session';
import { sessions } from '../sessions';

export const logout = async () => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

	sessions.remove(session);

	return {
		ok: true,
		error: null,
		data: null,
	};
};
