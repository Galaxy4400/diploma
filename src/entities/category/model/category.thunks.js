import { server } from "../../../shared/bff";
import { resetCategory, setCategory } from "./category.actions";


export const loadCategory = (categoryId) => async (dispatch) => {
	dispatch(resetCategory());

	const { data: category } = await server.getCategory(categoryId);

	if (category) {
		dispatch(setCategory(category));
	} else {
		dispatch(resetCategory());
	}
};


export const updateCategory = (categoryId, categoryData) => async (dispatch) => {
	const { data: category } = await server.updateCategory(categoryId, categoryData);

	dispatch(setCategory(category));
};