import { deleteUser } from "../api"

export const removeUser = async (session, userId) => {
	if (!session) {
		return {
			error: 'Доступ запрещен',
			res: null,
		}
	}

	deleteUser(userId);

	return {
		error: null,
		res: true,
	}
}