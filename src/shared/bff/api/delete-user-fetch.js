import { API_HOST } from "../constants";

export const deleteUserFetch = (userId) =>
	fetch(`${API_HOST}/users/${userId}`, {
		method: 'DELETE',
	});