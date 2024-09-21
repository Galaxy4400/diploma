import { useEffect } from "react";
import { useServer } from "../../../app/providers/server";
import { useDispatch, useSelector } from "react-redux";
import { resetAccounts, selectAccounts, setAccounts } from "../../../entities/accounts";
import { resetCategories, selectCategories, setCategories } from "../../../entities/categories";

export const useMainPageNeededData = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const accounts = useSelector(selectAccounts);
	const categories = useSelector(selectCategories);

	useEffect(() => {
		dispatch(resetAccounts());
		dispatch(resetCategories());

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