import { API_HOST } from "../constants";

export const deleteOperation = (operationId) =>
	fetch(`${API_HOST}/operations/${operationId}`, {
		method: 'DELETE',
	});