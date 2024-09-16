import { format } from "date-fns";
import { API_HOST } from "../constants";

export const createAccount = (accountData) =>
	fetch(`${API_HOST}/accounts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
			...accountData,
			createdAt: format(new Date(), 'dd.MM.yyyy HH:mm:ss'),
		}),
	})
	.then(response => response.json());