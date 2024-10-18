import { format } from 'date-fns';
import { API_HOST, DATETIME_FORMAT } from '../constants';

export const createCategory = (categoryData) =>
	fetch(`${API_HOST}/categories`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			...categoryData,
			createdAt: format(new Date(), DATETIME_FORMAT),
		}),
	}).then((response) => response.json());
