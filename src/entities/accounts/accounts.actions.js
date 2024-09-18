import { ACTION_TYPE } from "../../shared/lib/store"

export const setAccounts = (accounts) => {
	return { type: ACTION_TYPE.SET_ACCOUNTS, payload: accounts };
}