import { ACTION_TYPE } from "../../../shared/lib/store"

export const setCategories = (categories) => {
	return { type: ACTION_TYPE.SET_CATEGORIES, payload: categories };
}

export const resetCategories = () => {
	return { type: ACTION_TYPE.RESET_CATEGORIES };
}