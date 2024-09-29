import { API_HOST } from '../constants';

export const updateAccount = (accountId, updatingData) =>
	fetch(`${API_HOST}/accounts/${accountId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(updatingData),
	}).then((updatedAccount) => updatedAccount.json());
