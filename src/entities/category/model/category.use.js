// import { useDispatch, useSelector } from "react-redux";
// import { useServer } from "../../../app/providers/server";
// import { useEffect } from "react";
// import { selectCategory } from "./category.selectors";
// import { loadCategory } from "./category.thunks";

// export const useLoadCategory = (categoryId) => {
// 	const dispatch = useDispatch();
// 	const { requestServer } = useServer();
// 	const category = useSelector(selectCategory);

// 	useEffect(() => {
// 		dispatch(loadCategory(requestServer, categoryId ));
// 	}, [categoryId, dispatch, requestServer]);

// 	return category.id ? category : null;
// }