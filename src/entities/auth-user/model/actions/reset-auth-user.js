import { ACTION_TYPE } from "../../../../shared/constants";

export const resetAuthUser = () => {
	return { type: ACTION_TYPE.RESET_AUTH_USER };
};