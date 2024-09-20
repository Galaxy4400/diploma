import { resetOperation, setOperation } from "./operation.actions";


export const loadOperation = (requestServer, operationId) => async (dispatch) => {
	dispatch(resetOperation());

	const { data: operation } = await requestServer.getOperation(operationId);

	if (operation) {
		dispatch(setOperation(operation));
	} else {
		dispatch(resetOperation());
	}
};