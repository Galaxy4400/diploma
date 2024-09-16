import { api } from "../api";

export const updateUser = async (session, id, updatingUserData) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	const updatedUser = await api.updateUser(id, updatingUserData);

	return {
		ok: true,
		error: null,
		data: {
			id: updatedUser.id,
			login: updatedUser.login,
		},
	}
}