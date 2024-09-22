import { server } from "../../../shared/bff";
import { resetOperations, setOperations } from "./operations.actions";

export const loadOperations = (accountId) => async (dispatch) => {
	dispatch(resetOperations());

	const { data: operations } = await server.getOperations(accountId);

	dispatch(setOperations(operations));
}