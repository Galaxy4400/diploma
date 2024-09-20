import { setCategories } from "./categories.actions";

export const loadCategories = (requestServer) => async (dispatch) => {
	const { data: categories } = await requestServer.getCategories();

	dispatch(setCategories(categories));
}