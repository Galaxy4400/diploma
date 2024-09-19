import { useDispatch, useSelector } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { selectAccount } from "./category.selectors";
import { useEffect } from "react";
import { loadAccount } from "./category.thunks";
import { useAuth } from "../../../app/providers/auth";

export const useLoadAccount = (accountId) => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const { authUser } = useAuth();
	const account = useSelector(selectAccount);

	useEffect(() => {
		dispatch(loadAccount(requestServer, accountId, authUser.id ));
	}, [accountId, dispatch, requestServer, authUser.id]);

	return account.id ? account : null;
}