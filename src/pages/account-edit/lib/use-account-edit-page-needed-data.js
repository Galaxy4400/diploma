import { useEffect } from "react";
import { useServer } from "../../../app/providers/server";
import { useDispatch, useSelector } from "react-redux";
import { selectAccount, setAccount } from "../../../entities/account";

export const useAccountEditPageNeededData = (accountId) => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const account = useSelector(selectAccount);

	useEffect(() => {
		const fetchData = async () => {
			const accountResponse = await requestServer.getAccount(accountId);

			dispatch(setAccount(accountResponse.data));
		}
		
		fetchData();
	}, [requestServer, dispatch, accountId]);

	return { account };
};