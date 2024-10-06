import { ACTION_TYPE } from '../../../shared/lib/store';

const initialApplicationState = {
	filter: {},
};

export const applicationReducer = (state = initialApplicationState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_FILTER: {
			return { ...state, filter: { ...payload } };
		}
		case ACTION_TYPE.RESET_APP: {
			return initialApplicationState;
		}
		default:
			return state;
	}
};
