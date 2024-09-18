import { useDispatch, useSelector } from "react-redux";
import { useServer } from "../../app/providers/server";
import { useParams } from "react-router-dom";
import { selectAccount } from "./account.selectors";
import { useEffect } from "react";
import { loadAccount } from "./account.thunks";

export const useLoadAccount = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const { id: accountId } = useParams();
	const account = useSelector(selectAccount);

	useEffect(() => {
		dispatch(loadAccount(requestServer, accountId ));
	}, [accountId, dispatch, requestServer]);

	return account;
}