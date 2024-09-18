import { Link } from "react-router-dom";

export const AccountView = ({ accountData, deleteSlot }) => {
	return (
		<div>
			<div>Идентификатор: {accountData.id}</div>
			<div>Название: {accountData.name}</div>
			<div>Тип: {accountData.typeId}</div>
			<div>Дада: {accountData.createdAt}</div>
			<Link to="edit">Редактировать</Link>
			{deleteSlot}
		</div>
	)
};
