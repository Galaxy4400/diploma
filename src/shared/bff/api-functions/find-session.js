import { API_HOST } from '../constants';

export const findSession = async (searchParams) => {
	return fetch(`${API_HOST}/sessions?${searchParams}`)
		.then((response) => response.json())
		.then(([loadedSession]) => loadedSession);
};
