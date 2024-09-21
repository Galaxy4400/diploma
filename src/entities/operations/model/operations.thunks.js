import { resetOperations, setOperations } from "./operations.actions";

export const loadOperations = (requestServer, accountId) => async (dispatch) => {
	dispatch(resetOperations());

	const { data: operations } = await requestServer.getOperations(accountId);

	dispatch(setOperations(operations));
}