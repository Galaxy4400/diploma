import { resetOperation, setOperation } from "./operation.actions";


export const loadOperation = (requestServer, operationId, userId) => async (dispatch) => {
	const { data: operation } = await requestServer.getOperation(operationId, userId);

	if (operation) {
		dispatch(setOperation(operation));
	} else {
		console.log('get2');
		dispatch(resetOperation());
	}
};