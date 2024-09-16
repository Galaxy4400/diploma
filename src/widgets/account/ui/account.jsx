import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useServer } from "../../../app/providers/server-provider";
import { loadAccount } from "../../../entities/account";
import { selectAccount } from "../../../entities/account";

export const Account = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const { id: accountId } = useParams();
	const account = useSelector(selectAccount);

	useEffect(() => {
		dispatch(loadAccount(requestServer, accountId ));
	}, [accountId, dispatch, requestServer]);

	return (
		<div>
			<div>Идентификатор: {account.id}</div>
			<div>Название: {account.name}</div>
			<div>Тип: {account.typeId}</div>
			<div>Дада: {account.createdAt}</div>
			<Link to="edit">Редактировать</Link>
		</div>
	)
};
