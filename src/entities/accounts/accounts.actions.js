import { ACTION_TYPE } from "../../shared/lib/store"

export const setAccounts = (accounts) => {
	return { type: ACTION_TYPE.SET_ACCOUNTS, payload: accounts };
}

export const resetAccounts = () => {
	return { type: ACTION_TYPE.RESET_ACCOUNTS };
}