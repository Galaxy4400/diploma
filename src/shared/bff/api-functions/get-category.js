import { API_HOST } from '../constants';

export const getCategory = (categoryId) => fetch(`${API_HOST}/categories/${categoryId}`).then((response) => response.json());
