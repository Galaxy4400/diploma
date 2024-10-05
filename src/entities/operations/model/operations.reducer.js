import { ACTION_TYPE } from '../../../shared/lib/store';

const initialOperationsState = [];

export const operationsReducer = (state = initialOperationsState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_OPERATIONS: {
			return [...payload];
		}
		case ACTION_TYPE.ADD_OPERATIONS: {
			return [...state, ...payload];
		}
		case ACTION_TYPE.RESET_OPERATIONS: {
			return initialOperationsState;
		}
		default:
			return state;
	}
};
