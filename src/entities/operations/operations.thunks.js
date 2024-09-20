import { setOperations } from "./operations.actions";

export const loadOperations = (requestServer, accountId) => async (dispatch) => {
	const { data: operations } = await requestServer.getOperations(accountId);

	dispatch(setOperations(operations));
}