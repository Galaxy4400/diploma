import { API_HOST } from '../constants';

export const createSession = (hash, userId) =>
	fetch(`${API_HOST}/sessions`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({ hash, userId }),
	});
