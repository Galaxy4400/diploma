import { useDispatch, useSelector } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { useParams } from "react-router-dom";
import { selectAccount } from "./operation.selectors";
import { useEffect } from "react";
import { loadAccount } from "./operation.thunks";
import { useAuth } from "../../../app/providers/auth";

export const useLoadAccount = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const { id: accountId } = useParams();
	const { authUser } = useAuth();
	const account = useSelector(selectAccount);

	useEffect(() => {
		dispatch(loadAccount(requestServer, accountId, authUser.id ));
	}, [accountId, dispatch, requestServer, authUser.id]);

	return account.id ? account : null;
}