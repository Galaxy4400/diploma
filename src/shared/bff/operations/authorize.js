import { SESSION_KEY_NAME } from '../../lib/session';
import { api } from '../api';
import { sessions } from '../sessions';

export const authorize = async (authLogin, authPassword) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);

	const authSession = await api.getSession(session);

	if (authSession) {
		return {
			ok: false,
			error: 'Вы уже в системе',
			data: null,
		};
	}

	const user = await api.findUser(`login=${authLogin}`);

	if (!user) {
		return {
			ok: false,
			error: 'Такой пользователь не найден',
			data: null,
		};
	}

	const { password, ...rest } = user;

	if (authPassword !== password) {
		return {
			ok: false,
			error: 'Неверный пароль',
			data: null,
		};
	}

	return {
		ok: true,
		error: null,
		data: {
			...rest,
			session: sessions.create(user),
		},
	};
};
