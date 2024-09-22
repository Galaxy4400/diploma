import { Link } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { getAccountType } from "../lib/get-account-type";

export const AccountView = ({ accountData, deleteSlot }) => {
	console.log(accountData);
	return (
		<div>
			<div>Идентификатор: {accountData.id}</div>
			<div>Название: {accountData.name}</div>
			<div>Сумма: {accountData.amount} руб.</div>
			<div>Тип:  {getAccountType(accountData.typeId)?.name}</div>
			<div>Дата: {accountData.createdAt}</div>
			<Link to={path.account.edit(accountData.id)}>Редактировать</Link>
			{deleteSlot}
		</div>
	)
};
