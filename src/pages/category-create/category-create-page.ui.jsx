import { useAuth } from "../../app/providers/auth";
import { CategoryCreateForm } from "../../features/category";


export const CategoryCreatePage = () => {
	const { authUser } = useAuth();

	return (
		<div>
			<h1>СТРАНИЦА СОЗДАНИЯ КАТЕГОРИИ</h1>
			<CategoryCreateForm userId={authUser.id} />
		</div>
	)
};