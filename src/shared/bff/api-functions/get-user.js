import { API_HOST } from '../constants';

export const getUser = async (userId) => {
	return fetch(`${API_HOST}/users/${userId}`).then((response) => response.json());
};
