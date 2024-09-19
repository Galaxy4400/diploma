import { useDispatch, useSelector } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { selectAccount } from "./account.selectors";
import { useEffect } from "react";
import { loadAccount } from "./account.thunks";
import { useAuth } from "../../../app/providers/auth";

export const useLoadAccount = (accountId) => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const { authUser } = useAuth();
	const account = useSelector(selectAccount);

	useEffect(() => {
		dispatch(loadAccount(requestServer, accountId, authUser.id ));
	}, [accountId, dispatch, requestServer, authUser]);

	return account.id ? account : null;
}