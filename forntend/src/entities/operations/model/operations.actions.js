import { ACTION_TYPE } from '../../../shared/lib/store';

export const setOperations = (operations) => {
	return { type: ACTION_TYPE.SET_OPERATIONS, payload: operations };
};

export const addOperations = (operations) => {
	return { type: ACTION_TYPE.ADD_OPERATIONS, payload: operations };
};

export const resetOperations = () => {
	return { type: ACTION_TYPE.RESET_OPERATIONS };
};
