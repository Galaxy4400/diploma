import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAccount, setAccount } from "../../../entities/account";
import { selectOperations, setOperations } from "../../../entities/operations";
import { server } from "../../../shared/bff";

export const useAccountPageNeededData = (accountId) => {
	const dispatch = useDispatch();
	const account = useSelector(selectAccount);
	const operations = useSelector(selectOperations);

	useEffect(() => {
		const fetchData = async () => {
			const [
				accountResponse,
				operationsResponse
			] = await Promise.all([
				server.getAccount(accountId),
				server.getOperations(accountId),
			]);

			dispatch(setAccount(accountResponse.data));
			dispatch(setOperations(operationsResponse.data));
		}
		fetchData();
	}, [dispatch, accountId]);

	return { account, operations };
};