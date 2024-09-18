import { setAccounts } from "./accounts.actions";

export const loadAccounts = (requestServer) => async (dispatch) => {
	const { data: accounts } = await requestServer.getAccounts();

	dispatch(setAccounts(accounts));
}