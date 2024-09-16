import { ACTION_TYPE } from "../../shared/lib/store";

export const resetAuth = () => {
	return { type: ACTION_TYPE.RESET_AUTH };
};

export const setAuth = (user) => {
	return { type: ACTION_TYPE.SET_AUTH, payload: user };
};