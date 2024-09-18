import { ACTION_TYPE } from "../../shared/lib/store";

const initialAccountsState = [];

export const accountsReducer = (state = initialAccountsState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_ACCOUNTS: {
			return [...payload];
		}
		case ACTION_TYPE.ADD_ACCOUNTS: {
			return [...state, ...payload];
		}
		case ACTION_TYPE.RESET_ACCOUNTS: {
			return initialAccountsState;
		}
		default:
			return state;
	}
}

