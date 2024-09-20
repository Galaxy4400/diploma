import { api } from "../api";

export const updateUser = async (session, updatingUserData) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	const authSession = await api.getSession(session);
	
	if (!authSession?.userId) {
		return {
			ok: false,
			error: 'Такого пользователя не существует',
			data: null,
		}
	}

	const updatedUser = await api.updateUser(authSession.userId, updatingUserData);

	return {
		ok: true,
		error: null,
		data: {
			id: updatedUser.id,
			login: updatedUser.login,
		},
	}
}