import { API_HOST } from "../constants";
import { generateData } from "../utils";

export const createUser = (login, password) =>
	fetch(`${API_HOST}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
			login,
			password,
			registedAt: generateData(),
		}),
	})
	.then(createdUser => createdUser.json());