import { patchUser } from "../api";

export const updateUser = async (session, id, updatingUserData) => {
	if (!session) {
		return {
			error: 'Доступ запрещен',
			res: null,
		}
	}

	const updatedUser = await patchUser(id, updatingUserData);

	return {
		error: null,
		res: {
			id: updatedUser.id,
			login: updatedUser.login,
		},
	}
}