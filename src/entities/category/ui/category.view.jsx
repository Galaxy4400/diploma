import { Link } from "react-router-dom";
import { path } from "../../../shared/lib/router";

export const CategoryView = ({ categoryData, deleteSlot }) => {
	return (
		<div>
			<div>Идентификатор: {categoryData.id}</div>
			<div>Название: {categoryData.name}</div>
			<div>Иконка: {categoryData.iconId}</div>
			<div>Тип: {categoryData.typeId}</div>
			<div>Дата: {categoryData.createdAt}</div>
			<Link to={path.category.edit(categoryData.id)}>Редактировать</Link>
			{deleteSlot}
		</div>
	)
};