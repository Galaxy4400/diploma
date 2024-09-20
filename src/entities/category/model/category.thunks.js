import { resetCategory, setCategory } from "./category.actions";


export const loadCategory = (requestServer, categoryId) => async (dispatch) => {
	const { data: category } = await requestServer.getCategory(categoryId);

	if (category) {
		dispatch(setCategory(category));
	} else {
		dispatch(resetCategory());
	}
};


export const updateCategory = (requestServer, categoryId, categoryData) => async (dispatch) => {
	const { data: category } = await requestServer.updateCategory(categoryId, categoryData);

	dispatch(setCategory(category));
};