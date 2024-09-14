import { API_HOST } from "../constants";
import { transformUser } from "../transformers";

export const findUser = async (searchParams) => {
	return fetch(`${API_HOST}/users?${searchParams}`)
		.then(response => response.json())
		.then(([loadedUser]) => {
			return loadedUser && transformUser(loadedUser);
		});
}