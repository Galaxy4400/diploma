import { SESSION_KEY_NAME } from "../../lib/session";
import { api } from "../api";

export const updateUser = async (updatingUserData) => {
	const session = sessionStorage.getItem(SESSION_KEY_NAME);
	
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

	const { password, ...rest } = updatedUser;

	return {
		ok: true,
		error: null,
		data: {
			...rest,
		},
	}
}