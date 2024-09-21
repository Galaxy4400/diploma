import { useEffect, useState } from "react";
import { useServer } from "../../../app/providers/server";

export const useLoadData = (operationData) => {
	const { requestServer } = useServer();
	const [account, setAccount] = useState(null);
	const [category, setCategory] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const [
				accountResponse, 
				categoryResponse
			] = await Promise.all([
				requestServer.getAccount(operationData.accountId),
				requestServer.getCategory(operationData.categoryId),
			]);

			setAccount(accountResponse.data);
			setCategory(categoryResponse.data);
		}
		fetchData();
	}, [operationData, requestServer]);

	return { account, category };
};