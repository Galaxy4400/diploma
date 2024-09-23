import { Link } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { getCategoryType } from "../lib";
import { Icon } from "../../../shared/ui/icon";

export const CategoryView = ({ category, deleteSlot }) => {
	return (
		<div>
			<div>Идентификатор: {category.id}</div>
			<div>Название: {category.name}</div>
			<div>Иконка: <Icon name={category.icon} /></div>
			<div>Тип: {getCategoryType(category.typeId)?.name}</div>
			<div>Дата: {category.createdAt}</div>
			<Link to={path.category.edit(category.id)}>Редактировать</Link>
			{deleteSlot}
		</div>
	)
};
