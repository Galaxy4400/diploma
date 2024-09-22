import { server } from "../../../shared/bff";
import { resetCategories, setCategories } from "./categories.actions";

export const loadCategories = () => async (dispatch) => {
	dispatch(resetCategories());

	const { data: categories } = await server.getCategories();

	dispatch(setCategories(categories));
}