import { ACTION_TYPE } from "../../shared/lib/store";

const initialCategoriesState = [];

export const categoriesReducer = (state = initialCategoriesState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_CATEGORIES: {
			return [...payload];
		}
		case ACTION_TYPE.ADD_CATEGORIES: {
			return [...state, ...payload];
		}
		case ACTION_TYPE.RESET_CATEGORIES: {
			return initialCategoriesState;
		}
		default:
			return state;
	}
}

