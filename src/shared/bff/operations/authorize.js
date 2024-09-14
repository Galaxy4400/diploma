import { findUser } from "../api";
import { sessions } from "../sessions";

export const authorize = async (session, authLogin, authPassword) => {

	if (session) {
		return {
			error: 'Вы уже в системе',
			res: null,
		}
	}

	const user = await findUser(`login=${authLogin}`);

	if (!user) {
		return {
			error: 'Такой пользователь не найден',
			res: null,
		}
	}

	const { id, login, password } = user;

	if (authPassword !== password) {
		return {
			error: 'Неверный пароль',
			res: null,
		}
	}

	return {
		error: null,
		res: {
			id,
			login,
			session: sessions.create(user),
		},
	}
};