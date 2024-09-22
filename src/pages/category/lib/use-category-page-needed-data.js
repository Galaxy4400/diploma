import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, setCategory } from "../../../entities/category";
import { server } from "../../../shared/bff";

export const useCategoryPageNeededData = (categoryId) => {
	const dispatch = useDispatch();
	const category = useSelector(selectCategory);

	useEffect(() => {
		const fetchData = async () => {
			const categoryResponse = await server.getCategory(categoryId);

			dispatch(setCategory(categoryResponse.data));
		}
		
		fetchData();
	}, [dispatch, categoryId]);

	return { category };
};