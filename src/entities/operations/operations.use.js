import { useEffect, useState } from "react";
import { useServer } from "../../app/providers/server";
import { useAuth } from "../../app/providers/auth";

export const useLoadOperations = (accountId = null) => {
	const { requestServer } = useServer();
	const { authUser } = useAuth();
	const [operations, setOperations] = useState([]);

	useEffect(() => {
		requestServer.getOperations(authUser.id, accountId)
			.then(({data: operations}) => setOperations(operations));
	}, [requestServer, authUser, accountId]);

	return operations;
}