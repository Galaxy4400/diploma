import { API_HOST } from "../constants";
import { transformSession } from "../transformers";

export const getSession = (hash) =>
	fetch(`${API_HOST}/sessions?hash=${hash}`)
		.then(response => response.json())
		.then(([loadedSession]) => loadedSession && transformSession(loadedSession));