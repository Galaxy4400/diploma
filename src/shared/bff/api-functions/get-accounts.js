import { API_HOST } from "../constants";

export const getAccounts = () =>
	fetch(`${API_HOST}/accounts`)
		.then(response => response.json());