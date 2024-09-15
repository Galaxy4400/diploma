import { API_HOST } from "../constants";

export const getSessionFetch = (hash) =>
	fetch(`${API_HOST}/sessions?hash=${hash}`)
		.then(response => response.json())
		.then(([loadedSession]) => loadedSession);