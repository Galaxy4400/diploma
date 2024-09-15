import { ACTION_TYPE } from "../../../../shared/constants";

export const setAuthUser = (user) => {
	return { type: ACTION_TYPE.SET_AUTH_USER, payload: user };
};