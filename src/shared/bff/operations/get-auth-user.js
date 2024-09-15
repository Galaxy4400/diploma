import { findSessionFetch, getUserFetch } from "../api";

export const getAuthUser = async (session, storageSession) => {

	if (!storageSession) {
		return {
			ok: false,
			error: 'Вы не аутентифицированы',
			data: null,
		}
	}

	const dbSession = await findSessionFetch(`hash=${storageSession}`);

	if (!dbSession) {
		return {
			ok: false,
			error: 'Такой сессии не существует',
			data: null,
		}
	}

	const authUser = await getUserFetch(dbSession.userId);

	if (!authUser) {
		return {
			ok: false,
			error: 'Пользователь с такой сессией не найден',
			data: null,
		}
	}

	return {
		ok: true,
		error: null,
		data: {
			id: authUser.id,
			login: authUser.login,
			session: storageSession,
		},
	}
};