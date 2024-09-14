import { API_HOST } from "../constants";
import { transformUser } from "../transformers";

export const getUser = async (userId) => {
	return fetch(`${API_HOST}/users/${userId}`)
		.then(response => response.json())
		.then(loadedUser => loadedUser && transformUser(loadedUser));
}