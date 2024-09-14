import { ACTION_TYPE, SESSION_KEY_NAME } from "../../../../../shared/constants";

export const logout = () => {
	sessionStorage.removeItem(SESSION_KEY_NAME);

	return { type: ACTION_TYPE.LOGOUT };
};