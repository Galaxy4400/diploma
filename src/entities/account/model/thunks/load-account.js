import { setAccount } from "../actions";

export const loadAccount = (requestServer, accountId) => async (dispatch) => {
	const { data: account } = await requestServer.getAccount(accountId);

	dispatch(setAccount(account));
};