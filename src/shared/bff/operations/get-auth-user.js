import { findSession, findUser, getUser } from "../api";

export const getAuthUser = async (session, storageSession) => {

	if (!storageSession) {
		return {
			error: 'Вы не аутентифицированы',
			res: null,
		}
	}

	const dbSession = await findSession(`hash=${storageSession}`);

	if (!dbSession) {
		return {
			error: 'Такой сессии не существует',
			res: null,
		}
	}

	const authUser = await getUser(dbSession.userId);

	if (!authUser) {
		return {
			error: 'Пользователь с такой сессией не найден',
			res: null,
		}
	}

	return {
		error: null,
		res: {
			id: authUser.id,
			login: authUser.login,
			session: storageSession,
		},
	}
};