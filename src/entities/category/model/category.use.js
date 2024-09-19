import { useDispatch, useSelector } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { useEffect } from "react";
import { useAuth } from "../../../app/providers/auth";
import { selectCategory } from "./category.selectors";
import { loadCategory } from "./category.thunks";

export const useLoadCategory = (categoryId) => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const { authUser } = useAuth();
	const category = useSelector(selectCategory);

	useEffect(() => {
		dispatch(loadCategory(requestServer, categoryId, authUser.id ));
	}, [categoryId, dispatch, requestServer, authUser]);

	return category.id ? category : null;
}