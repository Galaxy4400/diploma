import { ACTION_TYPE } from "../../../shared/lib/store";


export const setLoading = (loadingState) => {
	return { type: ACTION_TYPE.SET_LOADING, payload: loadingState };
}

export const resetApp = () => {
	return { type: ACTION_TYPE.RESET_APP };
}