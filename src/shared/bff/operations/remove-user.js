import { api } from "../api";

export const removeUser = async (session, userId) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	await api.deleteUser(userId);

	return {
		ok: true,
		error: null,
		data: null,
	}
}