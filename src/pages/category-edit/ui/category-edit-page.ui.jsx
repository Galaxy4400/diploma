import { useParams } from "react-router-dom";
import { CategoryEditForm } from "../../../features/category";
import { useCategoryEditPageNeededData } from "../lib";

export const CategoryEditPage = () => {
	const { id: categoryId } = useParams();

	const category = useCategoryEditPageNeededData(categoryId);

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ СЧЕТА</h1>
			<CategoryEditForm categoryData={category} />
		</div>
	)
};