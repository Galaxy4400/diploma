import { API_HOST } from "../constants";

export const updateCategory = (categoryId, updatingData) =>
	fetch(`${API_HOST}/categories/${categoryId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify(updatingData),
	})
	.then(updatedCategory => updatedCategory.json());