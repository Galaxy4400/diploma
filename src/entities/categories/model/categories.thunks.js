import { resetCategories, setCategories } from "./categories.actions";

export const loadCategories = (requestServer) => async (dispatch) => {
	dispatch(resetCategories());

	const { data: categories } = await requestServer.getCategories();

	dispatch(setCategories(categories));
}