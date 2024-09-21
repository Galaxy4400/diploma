import { Link } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { getCategoryType } from "../lib";
import { CategoryIcon } from "../../../shared/ui/icons";

export const CategoryView = ({ categoryData, deleteSlot }) => {
	return (
		<div>
			<div>Идентификатор: {categoryData.id}</div>
			<div>Название: {categoryData.name}</div>
			<div>Иконка: <CategoryIcon name={categoryData.icon} /></div>
			<div>Тип: {getCategoryType(categoryData.typeId).name}</div>
			<div>Дата: {categoryData.createdAt}</div>
			<Link to={path.category.edit(categoryData.id)}>Редактировать</Link>
			{deleteSlot}
		</div>
	)
};
