import { API_HOST } from '../constants';

export const getCategories = (searchParams) =>
	fetch(`${API_HOST}/categories${searchParams ? `?${searchParams}` : ''}`).then((response) =>
		response.json(),
	);
