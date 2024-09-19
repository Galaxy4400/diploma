import { useServer } from "../../../app/providers/server";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../app/providers/auth";
import { loadOperations } from "../../../entities/operations";


export const OperationDelete = ({ operationId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { requestServer } = useServer();
	const { authUser } = useAuth();

	const deleteHandler = async (id) => {
		await requestServer.deleteOperation(id);

		dispatch(loadOperations(requestServer, authUser.id));
		
		navigate(path.home());
	}

	return (
		<button type="button" onClick={() => deleteHandler(operationId)}>Удалить</button>
	)
};