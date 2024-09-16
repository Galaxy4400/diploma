import { format } from "date-fns";
import { API_HOST } from "../constants";

export const createUser = (login, password) =>
	fetch(`${API_HOST}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
			login,
			password,
			createdAt: format(new Date(), 'dd.MM.yyyy HH:mm:ss'),
		}),
	})
	.then(response => response.json());