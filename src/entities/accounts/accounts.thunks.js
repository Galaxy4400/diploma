import { setAccounts } from "./accounts.actions";

export const loadAccounts = (requestServer, userId) => async (dispatch) => {
	const { data: accounts } = await requestServer.getAccounts(userId);

	dispatch(setAccounts(accounts));
}