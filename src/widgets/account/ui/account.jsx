import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useServer } from "../../../app/providers/server-provider";
import { loadAccount } from "../../../entities/account";

export const Account = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const { id: accountId } = useParams();

	useEffect(() => {
		dispatch(loadAccount(requestServer, accountId ));
	}, []);

	return (
		<div>Account: {accountId}</div>
	)
};