import { ACTION_TYPE } from "../../shared/lib/store"

export const setOperations = (operations) => {
	return { type: ACTION_TYPE.SET_OPERATIONS, payload: operations };
}