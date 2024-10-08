import { API_HOST } from '../constants';

export const findUser = async (searchParams) => {
	return fetch(`${API_HOST}/users?${searchParams}`)
		.then((response) => response.json())
		.then(([loadedUser]) => loadedUser);
};
