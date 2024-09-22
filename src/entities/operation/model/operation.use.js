import { useDispatch, useSelector } from "react-redux";
import { selectOperation } from "./operation.selectors";
import { useEffect } from "react";
import { loadOperation } from "./operation.thunks";

export const useLoadOperation = (operationId) => {
	const dispatch = useDispatch();
	const operation = useSelector(selectOperation);

	useEffect(() => {
		dispatch(loadOperation(operationId));
	}, [operationId, dispatch]);

	return operation.id ? operation : null;
}