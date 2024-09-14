import { ACTION_TYPE } from "../../../../../shared/constants";

export const logout = () => {
	sessionStorage.removeItem('session');

	return { type: ACTION_TYPE.LOGOUT };
};