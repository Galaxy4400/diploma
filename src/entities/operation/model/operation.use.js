import { useDispatch, useSelector } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { selectOperation } from "./operation.selectors";
import { useEffect } from "react";
import { loadOperation } from "./operation.thunks";

export const useLoadOperation = (operationId) => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const operation = useSelector(selectOperation);

	useEffect(() => {
		dispatch(loadOperation(requestServer, operationId ));
	}, [operationId, dispatch, requestServer]);

	return operation.id ? operation : null;
}