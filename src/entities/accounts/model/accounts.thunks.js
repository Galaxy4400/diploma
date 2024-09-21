import { resetAccounts, setAccounts } from "./accounts.actions";

export const loadAccounts = (requestServer) => async (dispatch) => {
	dispatch(resetAccounts());

	const { data: accounts } = await requestServer.getAccounts();

	dispatch(setAccounts(accounts));
}