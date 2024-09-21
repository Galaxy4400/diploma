import { useDispatch, useSelector } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { selectCategories } from "./categories.selectors";
import { useEffect } from "react";
import { loadCategories } from "./categories.thunks";

export const useLoadCategories = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const categories = useSelector(selectCategories);

	useEffect(() => {
		dispatch(loadCategories(requestServer));
	}, [dispatch, requestServer]);

	return categories;
}