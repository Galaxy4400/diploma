import { API_HOST } from '../constants';

export const getAccounts = (searchParams) => fetch(`${API_HOST}/accounts${searchParams ? `?${searchParams}` : ''}`).then((response) => response.json());
