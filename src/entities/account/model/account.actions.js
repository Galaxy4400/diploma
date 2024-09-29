import { ACTION_TYPE } from '../../../shared/lib/store';

export const setAccount = (account) => {
	return { type: ACTION_TYPE.SET_ACCOUNT, payload: account };
};

export const resetAccount = () => {
	return { type: ACTION_TYPE.RESET_ACCOUNT };
};
