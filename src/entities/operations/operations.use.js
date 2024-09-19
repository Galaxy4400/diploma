import { useEffect } from "react";
import { useServer } from "../../app/providers/server";
import { useAuth } from "../../app/providers/auth";
import { useDispatch, useSelector } from "react-redux";
import { loadOperations } from "./operations.thunks";
import { selectOperations } from "./operations.selectors";

export const useLoadOperations = (accountId = null) => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const { authUser } = useAuth();
	const operations = useSelector(selectOperations);

	useEffect(() => {
		dispatch(loadOperations(requestServer, authUser.id));
	}, [accountId, dispatch, requestServer, authUser.id]);

	return operations;
}