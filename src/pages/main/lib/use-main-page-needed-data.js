import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAccounts, setAccounts } from "../../../entities/accounts";
import { selectCategories, setCategories } from "../../../entities/categories";
import { server } from "../../../shared/bff";

export const useMainPageNeededData = () => {
	const dispatch = useDispatch();
	const accounts = useSelector(selectAccounts);
	const categories = useSelector(selectCategories);

	useEffect(() => {
		const fetchData = async () => {
			const [
				accountsResponse,
				categoriesResponse
			] = await Promise.all([
				server.getAccounts(),
				server.getCategories(),
			]);

			dispatch(setAccounts(accountsResponse.data));
			dispatch(setCategories(categoriesResponse.data));
		}
		fetchData();
	}, [dispatch]);

	return { accounts, categories };
};