import { resetAccount, setAccount } from "./category.actions";


export const loadAccount = (requestServer, accountId, userId) => async (dispatch) => {
	const { data: account } = await requestServer.getAccount(accountId, userId);

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