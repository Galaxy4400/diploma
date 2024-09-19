import { format } from "date-fns";
import { API_HOST } from "../constants";

export const createOperation = (operationData) =>
	fetch(`${API_HOST}/operations`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({
			...operationData,
			createdAt: format(new Date(), 'dd.MM.yyyy HH:mm:ss'),
		}),
	})
	.then(response => response.json());