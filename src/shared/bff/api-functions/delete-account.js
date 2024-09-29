import { API_HOST } from '../constants';

export const deleteAccount = (accountId) =>
	fetch(`${API_HOST}/accounts/${accountId}`, {
		method: 'DELETE',
	});
