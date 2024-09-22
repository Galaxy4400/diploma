import { useParams } from "react-router-dom";
import { ErrorHandler } from "../../../shared/ui";
import { Category } from "../../../widgets/category";
import { useCategoryPageNeededData } from "../lib";


export const CategoryPage = () => {
	const { id: categoryId } = useParams();

	const { category } = useCategoryPageNeededData(categoryId);

	return (
		<div>
			<h1>СТРАНИЦА КАТЕГОРИИ</h1>
			{category ? (
				<div>
					<Category categoryData={category} />
				</div>
			) : (
				<ErrorHandler message="Такая категория не найдена" />
			)}
		</div>
	)
};