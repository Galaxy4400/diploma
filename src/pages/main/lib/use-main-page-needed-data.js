import { useEffect } from "react";
import { useServer } from "../../../app/providers/server";
import { useDispatch, useSelector } from "react-redux";
import { selectAccounts, setAccounts } from "../../../entities/accounts";
import { selectCategories, setCategories } from "../../../entities/categories";

export const useMainPageNeededData = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const accounts = useSelector(selectAccounts);
	const categories = useSelector(selectCategories);

	useEffect(() => {
		const fetchData = async () => {
			const [
				accountsResponse,
				categoriesResponse
			] = await Promise.all([
				requestServer.getAccounts(),
				requestServer.getCategories(),
			]);

			dispatch(setAccounts(accountsResponse.data));
			dispatch(setCategories(categoriesResponse.data));
		}
		fetchData();
	}, [requestServer, dispatch]);

	return { accounts, categories };
};