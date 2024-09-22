import { useLoaderData } from "react-router-dom";
import { CategoryEditForm } from "../../../features/category";


export const CategoryEditPage = () => {
	const category = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ СЧЕТА</h1>
			<CategoryEditForm categoryData={category} />
		</div>
	)
};