import { server } from "../../../shared/bff";
import { resetAccount, setAccount } from "./account.actions";


export const loadAccount = (accountId) => async (dispatch) => {
	dispatch(resetAccount());

	const { data: account } = await server.getAccount(accountId);

	if (account) {
		dispatch(setAccount(account));
	} else {
		dispatch(resetAccount());
	}
};


export const updateAccount = (accountId, accountData) => async (dispatch) => {
	const { data: account } = await server.updateAccount(accountId, accountData);

	dispatch(setAccount(account));
};