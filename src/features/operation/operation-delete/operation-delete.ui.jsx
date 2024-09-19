import { useServer } from "../../../app/providers/server";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../app/providers/auth";
import { loadOperations } from "../../../entities/operations";
import { useFrom } from "../../../shared/lib/location";


export const OperationDelete = ({ operationId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { requestServer } = useServer();
	const { authUser } = useAuth();
	const from = useFrom();

	const deleteHandler = async (id) => {
		await requestServer.deleteOperation(id, authUser.id);

		dispatch(loadOperations(requestServer, authUser.id));
		
		navigate(from.pathname, { replace: true });
	}

	return (
		<button type="button" onClick={() => deleteHandler(operationId)}>Удалить</button>
	)
};