import { useEffect, useState } from "react";
import { server } from "../../../shared/bff";

export const useOperatinNeededData = (operationData) => {
	const [account, setAccount] = useState(null);
	const [category, setCategory] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const [
				accountResponse, 
				categoryResponse
			] = await Promise.all([
				server.getAccount(operationData.accountId),
				server.getCategory(operationData.categoryId),
			]);

			setAccount(accountResponse.data);
			setCategory(categoryResponse.data);
		}
		fetchData();
	}, [operationData]);

	return { account, category };
};