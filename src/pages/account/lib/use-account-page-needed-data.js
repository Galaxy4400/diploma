import { useEffect } from "react";
import { useServer } from "../../../app/providers/server";
import { useDispatch, useSelector } from "react-redux";
import { selectAccount, setAccount } from "../../../entities/account";
import { selectOperations, setOperations } from "../../../entities/operations";

export const useAccountPageNeededData = (accountId) => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const account = useSelector(selectAccount);
	const operations = useSelector(selectOperations);

	useEffect(() => {
		const fetchData = async () => {
			const [
				accountResponse,
				operationsResponse
			] = await Promise.all([
				requestServer.getAccount(accountId),
				requestServer.getOperations(accountId),
			]);

			dispatch(setAccount(accountResponse.data));
			dispatch(setOperations(operationsResponse.data));
		}
		fetchData();
	}, [requestServer, dispatch, accountId]);

	return { account, operations };
};