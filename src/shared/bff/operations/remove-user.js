import { deleteUserFetch } from "../api"

export const removeUser = async (session, userId) => {
	if (!session) {
		return {
			ok: false,
			error: 'Доступ запрещен',
			data: null,
		}
	}

	deleteUserFetch(userId);

	return {
		ok: true,
		error: null,
		data: null,
	}
}