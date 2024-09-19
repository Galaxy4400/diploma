import { ACTION_TYPE } from "../../../shared/lib/store";


export const setOperation = (operation) => {
	console.log(operation);
	return { type: ACTION_TYPE.SET_OPERATION, payload: operation };
}

export const resetOperation = () => {
	return { type: ACTION_TYPE.RESET_OPERATION };
}