import { ACTION_TYPE } from "../../../../../shared/constants";

export const logout = () => {
	return { type: ACTION_TYPE.RESET_USER };
};