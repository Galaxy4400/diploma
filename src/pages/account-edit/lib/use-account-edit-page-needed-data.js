import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAccount, setAccount } from "../../../entities/account";
import { server } from "../../../shared/bff";

export const useAccountEditPageNeededData = (accountId) => {
	const dispatch = useDispatch();
	const account = useSelector(selectAccount);

	useEffect(() => {
		const fetchData = async () => {
			const accountResponse = await server.getAccount(accountId);

			dispatch(setAccount(accountResponse.data));
		}
		
		fetchData();
	}, [dispatch, accountId]);

	return { account };
};