import { ACTION_TYPE } from "../../shared/lib/store";

const initialAccountState = {
	id: null,
	typeId: null,
	name: null,
	createdAt: null,
};

export const accountReducer = (state = initialAccountState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_ACCOUNT: {
			return { ...state, ...payload }
		}
		case ACTION_TYPE.RESET_ACCOUNT: {
			return initialAccountState;
		}
		default:
			return state;
	}
}