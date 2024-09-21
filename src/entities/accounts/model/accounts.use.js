import { useDispatch, useSelector } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { selectAccounts } from "./accounts.selectors";
import { useEffect } from "react";
import { loadAccounts } from "./accounts.thunks";

export const useLoadAccounts = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const accounts = useSelector(selectAccounts);

	useEffect(() => {
		dispatch(loadAccounts(requestServer));
	}, [dispatch, requestServer]);

	return accounts;
}