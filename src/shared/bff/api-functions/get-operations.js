import { API_HOST } from "../constants";

export const getOperations = (searchParams) =>
	fetch(`${API_HOST}/operations${searchParams ? `?${searchParams}` : ''}`)
		.then(response => response.json());