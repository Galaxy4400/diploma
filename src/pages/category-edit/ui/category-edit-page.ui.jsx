import { useLoaderData } from "react-router-dom";
import { CategoryEditForm } from "../../../features/category";
import { AsyncComponent, Loading } from "../../../shared/ui";


export const CategoryEditPage = () => {
	const { category } = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ КАТЕГОРИИ</h1>
			<AsyncComponent resolve={category} element={<CategoryEditForm />} fallback={<Loading />} />
		</div>
	)
};