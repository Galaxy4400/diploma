import { ACTION_TYPE } from "../../../../../shared/constants";

export const setUser = (user) => {
	return { type: ACTION_TYPE.SET_USER, payload: user };
};