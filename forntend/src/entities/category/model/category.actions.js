import { ACTION_TYPE } from '../../../shared/lib/store';

export const setCategory = (category) => {
	return { type: ACTION_TYPE.SET_CATEGORY, payload: category };
};

export const resetCategory = () => {
	return { type: ACTION_TYPE.RESET_CATEGORY };
};
