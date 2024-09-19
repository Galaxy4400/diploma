import { ACTION_TYPE } from "../../../shared/lib/store";

const initialCategoryState = {
	id: null,
	name: null,
	typeId: null,
	createdAt: null,
};

export const categoryReducer = (state = initialCategoryState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_CATEGORY: {
			return { ...state, ...payload }
		}
		case ACTION_TYPE.RESET_CATEGORY: {
			return initialCategoryState;
		}
		default:
			return state;
	}
}