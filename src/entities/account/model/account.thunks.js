import { resetAccount, setAccount } from "./account.actions";


export const loadAccount = (requestServer, accountId) => async (dispatch) => {
	const { data: account } = await requestServer.getAccount(accountId);

	if (account) {
		dispatch(setAccount(account));
	} else {
		dispatch(resetAccount());
	}
};


export const updateAccount = (requestServer, accountId, accountData) => async (dispatch) => {
	const { data: account } = await requestServer.updateAccount(accountId, accountData);

	dispatch(setAccount(account));
};