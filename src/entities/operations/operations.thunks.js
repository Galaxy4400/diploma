import { setOperations } from "./operations.actions";

export const loadOperations = (requestServer, userId, accountId) => async (dispatch) => {
	const { data: operations } = await requestServer.getOperations(userId, accountId);

	dispatch(setOperations(operations));
}