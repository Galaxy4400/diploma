import { API_HOST } from "../constants";

export const patchUser = (userId, updatingData) =>
	fetch(`${API_HOST}/users/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(updatingData),
	})
	.then(updatedUser => updatedUser.json());