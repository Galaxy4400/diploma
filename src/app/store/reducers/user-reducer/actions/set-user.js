import { ACTION_TYPE, SESSION_KEY_NAME } from "../../../../../shared/constants";

export const setUser = (user) => {
	sessionStorage.setItem(SESSION_KEY_NAME, user.session);

	return { type: ACTION_TYPE.SET_USER, payload: user };
};