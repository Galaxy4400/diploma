import { ACTION_TYPE } from "../../shared/constants";

export const setAccount = (account) => {
	return { type: ACTION_TYPE.SET_ACCOUNT, payload: account };
}