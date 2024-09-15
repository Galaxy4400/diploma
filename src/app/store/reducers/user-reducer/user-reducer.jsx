import { ACTION_TYPE } from "../../../../shared/constants";

const initialUserState = {
	id: null,
	login: null,
	session: null,
};

export const userReducer = (state = initialUserState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_USER: {
			return { ...state, ...payload }
		}
		case ACTION_TYPE.RESET_USER: {
			return initialUserState;
		}
		default:
			return state;
	}
}