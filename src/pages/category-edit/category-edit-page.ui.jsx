import { useParams } from "react-router-dom";
import { useLoadCategory } from "../../entities/category";
import { CategoryEditForm } from "../../features/category";

export const CategoryEditPage = () => {
	const { id: categoryId } = useParams();

	const category = useLoadCategory(categoryId);

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ СЧЕТА</h1>
			<CategoryEditForm categoryData={category} />
		</div>
	)
};