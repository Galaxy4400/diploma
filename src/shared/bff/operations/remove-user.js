import { deleteUser } from "../api"
import { sessions } from "../sessions";

export const removeUser = async (hash, userId) => {
	const access = await sessions.access(hash);

	if (!access) {
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