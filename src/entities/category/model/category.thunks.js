import { resetCategory, setCategory } from "./category.actions";


export const loadCategory = (requestServer, categoryId, userId) => async (dispatch) => {
	const { data: category } = await requestServer.getCategory(categoryId, userId);

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