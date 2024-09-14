import { API_HOST } from "../constants";
import { transformSession } from "../transformers";

export const findSession = async (searchParams) => {
	return fetch(`${API_HOST}/sessions?${searchParams}`)
		.then(response => response.json())
		.then(([loadedSession]) => {
			return loadedSession && transformSession(loadedSession);
		});
}