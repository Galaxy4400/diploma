import { ACTION_TYPE } from '../../../shared/lib/store';

const initialOperationState = {
	id: null,
	userId: null,
	accountId: null,
	categoryId: null,
	name: null,
	amount: null,
	createdAt: null,
};

export const operationReducer = (state = initialOperationState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_OPERATION: {
			return { ...state, ...payload };
		}
		case ACTION_TYPE.RESET_OPERATION: {
			return initialOperationState;
		}
		default:
			return state;
	}
};
