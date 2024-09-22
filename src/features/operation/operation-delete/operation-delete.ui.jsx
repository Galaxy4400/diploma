import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadOperations } from "../../../entities/operations/model";
import { useFrom } from "../../../shared/lib/location";
import { server } from "../../../shared/bff";


export const OperationDelete = ({ operationId }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const from = useFrom();

	const deleteHandler = async (id) => {
		await server.deleteOperation(id);

		dispatch(loadOperations());
		
		//TODO navigate to main fix
		navigate(from.pathname, { replace: true });
	}

	return (
		<button type="button" onClick={() => deleteHandler(operationId)}>Удалить</button>
	)
};