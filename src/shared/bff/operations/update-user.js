import { api } from "../api";

export const updateUser = async (session, userId, updatingUserData) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	const updatedUser = await api.updateUser(userId, updatingUserData);

	return {
		ok: true,
		error: null,
		data: {
			id: updatedUser.id,
			login: updatedUser.login,
		},
	}
}