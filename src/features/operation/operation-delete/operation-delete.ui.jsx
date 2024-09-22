import { useNavigate } from "react-router-dom";
import { useFrom } from "../../../shared/lib/location";
import { server } from "../../../shared/bff";
import { useState } from "react";


export const OperationDelete = ({ operationId }) => {
	const navigate = useNavigate();
	const from = useFrom();
	const [isDeleted, setIsDeleted] = useState(false);

	const deleteHandler = async (id) => {
		setIsDeleted(true);

		const response = await server.deleteOperation(id);

		if (!response.ok) setIsDeleted(false);

		//TODO navigate to main fix
		navigate(from?.pathname, { replace: true });
	}

	return (
		<button type="button" onClick={() => deleteHandler(operationId)} disabled={isDeleted}>Удалить</button>
	)
};