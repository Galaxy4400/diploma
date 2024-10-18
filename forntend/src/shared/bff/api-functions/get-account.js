import { API_HOST } from '../constants';

export const getAccount = (accountId) =>
	fetch(`${API_HOST}/accounts/${accountId}`).then((response) => response.json());
