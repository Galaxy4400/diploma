import { API_HOST } from "../constants";

export const deleteUser = (userId) =>
	fetch(`${API_HOST}/users/${userId}`, {
		method: 'DELETE',
	});