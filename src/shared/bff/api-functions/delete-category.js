import { API_HOST } from "../constants";

export const deleteCategory = (categoryId) =>
	fetch(`${API_HOST}/categories/${categoryId}`, {
		method: 'DELETE',
	});