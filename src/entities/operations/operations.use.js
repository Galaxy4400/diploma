import { useEffect, useState } from "react";
import { useServer } from "../../app/providers/server";
import { useAuth } from "../../app/providers/auth";

export const useLoadAccountOperations = (accountId) => {
	const { requestServer } = useServer();
	const { authUser } = useAuth();
	const [operations, setOperations] = useState([]);

	useEffect(() => async () => {
		const { data: operations} = await requestServer.getOperations(authUser.id, accountId);

		setOperations(operations);
	}, [requestServer, authUser, accountId]);

	return operations;
}