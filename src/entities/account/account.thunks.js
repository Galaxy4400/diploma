import { setAccount } from "./account.actions";


export const loadAccount = (requestServer, accountId) => async (dispatch) => {
	const { data: account } = await requestServer.getAccount(accountId);

	dispatch(setAccount(account));
};


export const updateAccount = (requestServer, accountId, accountData) => async (dispatch) => {
	const { data: account } = await requestServer.updateAccount(accountId, accountData);

	dispatch(setAccount(account));
}