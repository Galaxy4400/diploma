import { server } from "../../../shared/bff";
import { resetOperation, setOperation } from "./operation.actions";


export const loadOperation = (operationId) => async (dispatch) => {
	dispatch(resetOperation());

	const { data: operation } = await server.getOperation(operationId);

	if (operation) {
		dispatch(setOperation(operation));
	} else {
		dispatch(resetOperation());
	}
};