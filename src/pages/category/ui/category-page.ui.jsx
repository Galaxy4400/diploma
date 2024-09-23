import { useLoaderData } from "react-router-dom";
import { AsyncComponent, Loading } from "../../../shared/ui/components";
import { Category } from "../../../widgets/category";


export const CategoryPage = () => {
	const { category } = useLoaderData();

	return (
		<div>
			<h1>СТРАНИЦА КАТЕГОРИИ</h1>
			<AsyncComponent resolve={category} element={<Category />} fallback={<Loading />} />
		</div>
	)
};