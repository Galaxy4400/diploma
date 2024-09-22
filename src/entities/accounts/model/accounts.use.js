import { useDispatch, useSelector } from "react-redux";
import { selectAccounts } from "./accounts.selectors";
import { useEffect } from "react";
import { loadAccounts } from "./accounts.thunks";

export const useLoadAccounts = () => {
	const dispatch = useDispatch();
	const accounts = useSelector(selectAccounts);

	useEffect(() => {
		dispatch(loadAccounts());
	}, [dispatch]);

	return accounts;
}