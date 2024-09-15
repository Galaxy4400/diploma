import { API_HOST } from "../constants";

export const deleteSessionFetch = (sessionId) =>
	fetch(`${API_HOST}/sessions/${sessionId}`, {
		method: 'DELETE',
	});