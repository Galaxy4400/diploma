import { useDispatch, useSelector } from "react-redux";
import { useServer } from "../../app/providers/server";
import { selectAccounts } from "./accounts.selectors";
import { useEffect } from "react";
import { loadAccounts } from "./accounts.thunks";
import { useAuth } from "../../app/providers/auth";

export const useLoadAccounts = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const { authUser } = useAuth();
	const accounts = useSelector(selectAccounts);

	useEffect(() => {
		dispatch(loadAccounts(requestServer, authUser.id));
	}, [dispatch, authUser, requestServer]);

	return accounts;
}