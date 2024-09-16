import { API_HOST } from "../constants";

export const deleteSession = (sessionId) =>
	fetch(`${API_HOST}/sessions/${sessionId}`, {
		method: 'DELETE',
	});