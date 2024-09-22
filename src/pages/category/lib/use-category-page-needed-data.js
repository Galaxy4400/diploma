import { useEffect } from "react";
import { useServer } from "../../../app/providers/server";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, setCategory } from "../../../entities/category";

export const useCategoryPageNeededData = (categoryId) => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const category = useSelector(selectCategory);

	useEffect(() => {
		const fetchData = async () => {
			const categoryResponse = await requestServer.getCategory(categoryId);

			dispatch(setCategory(categoryResponse.data));
		}
		
		fetchData();
	}, [requestServer, dispatch, categoryId]);

	return { category };
};