import { ACTION_TYPE } from "../../../shared/constants";

const initialAuthUserState = {
	id: null,
	login: null,
	session: null,
};

export const authUserReducer = (state = initialAuthUserState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_AUTH_USER: {
			return { ...state, ...payload }
		}
		case ACTION_TYPE.RESET_AUTH_USER: {
			return initialAuthUserState;
		}
		default:
			return state;
	}
}