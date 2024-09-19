import { API_HOST } from "../constants";

export const getOperation = (operationId) =>
	fetch(`${API_HOST}/operations/${operationId}`)
		.then(response => response.json());