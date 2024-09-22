import { useLoaderData } from "react-router-dom";
import { ErrorHandler } from "../../../shared/ui";
import { Category } from "../../../widgets/category";


export const CategoryPage = () => {
	const category = useLoaderData();

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