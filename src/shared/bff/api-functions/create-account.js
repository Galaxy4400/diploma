import { format } from 'date-fns';
import { API_HOST, DATETIME_FORMAT } from '../constants';

export const createAccount = (accountData) =>
	fetch(`${API_HOST}/accounts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			...accountData,
			createdAt: format(new Date(), DATETIME_FORMAT),
		}),
	}).then((response) => response.json());
