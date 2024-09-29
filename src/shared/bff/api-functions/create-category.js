import { format } from 'date-fns';
import { API_HOST } from '../constants';

export const createCategory = (categoryData) =>
	fetch(`${API_HOST}/categories`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			...categoryData,
			createdAt: format(new Date(), 'dd.MM.yyyy HH:mm:ss'),
		}),
	}).then((response) => response.json());
