import { ACTION_TYPE } from "../../../shared/lib/store";

const initialAppState = {
	isLoading: false,
};

export const appReducer = (state = initialAppState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_LOADING: {
			return { ...state, isLoading: payload }
		}
		case ACTION_TYPE.RESET_APP: {
			return initialAppState;
		}
		default:
			return state;
	}
}