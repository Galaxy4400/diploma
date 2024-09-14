import { ACTION_TYPE } from "../../../../../shared/constants";

export const setUser = (user) => {
	sessionStorage.setItem('session', user?.session);

	return { type: ACTION_TYPE.SET_USER, payload: user };
};