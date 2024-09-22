import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "./categories.selectors";
import { useEffect } from "react";
import { loadCategories } from "./categories.thunks";

export const useLoadCategories = () => {
	const dispatch = useDispatch();
	const categories = useSelector(selectCategories);

	useEffect(() => {
		dispatch(loadCategories());
	}, [dispatch]);

	return categories;
}