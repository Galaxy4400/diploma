import { ACTION_TYPE } from "../../../shared/lib/store";

const initialAuthState = {
	id: null,
	login: null,
	session: null,
};

export const authReducer = (state = initialAuthState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_AUTH: {
			return { ...state, ...payload }
		}
		case ACTION_TYPE.RESET_AUTH: {
			return initialAuthState;
		}
		default:
			return state;
	}
}