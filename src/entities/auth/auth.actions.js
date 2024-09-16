import { ACTION_TYPE } from "../../shared/constants";

export const resetAuth = () => {
	return { type: ACTION_TYPE.RESET_AUTH };
};

export const setAuth = (user) => {
	return { type: ACTION_TYPE.SET_AUTH, payload: user };
};