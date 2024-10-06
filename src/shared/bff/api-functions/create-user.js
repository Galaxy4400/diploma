import { format } from 'date-fns';
import { API_HOST, DATETIME_FORMAT } from '../constants';

export const createUser = (login, password) =>
	fetch(`${API_HOST}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			createdAt: format(new Date(), DATETIME_FORMAT),
		}),
	}).then((response) => response.json());
