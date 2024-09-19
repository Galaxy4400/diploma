import { Link } from "react-router-dom";
import { path } from "../../../shared/lib/router";

export const AccountView = ({ accountData, deleteSlot }) => {
	return (
		<div>
			<div>Идентификатор: {accountData.id}</div>
			<div>Название: {accountData.name}</div>
			<div>Тип: {accountData.typeId}</div>
			<div>Дада: {accountData.createdAt}</div>
			<Link to={path.account.edit(accountData.id)}>Редактировать</Link>
			{deleteSlot}
		</div>
	)
};
