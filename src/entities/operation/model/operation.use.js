import { useDispatch, useSelector } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { useParams } from "react-router-dom";
import { selectOperation } from "./operation.selectors";
import { useEffect } from "react";
import { useAuth } from "../../../app/providers/auth";
import { loadOperation } from "./operation.thunks";

export const useLoadOperation = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const { id: operationId } = useParams();
	const { authUser } = useAuth();
	const operation = useSelector(selectOperation);

	useEffect(() => {
		dispatch(loadOperation(requestServer, operationId, authUser.id ));
	}, [operationId, dispatch, requestServer, authUser.id]);

	return operation.id ? operation : null;
}