import { CategoryView } from "../../entities/category";
import { CategoryDelete } from "../../features/category";

export const Category = ({ categoryData }) => {
	return (
		<CategoryView 
			categoryData={categoryData}
			deleteSlot={<CategoryDelete categoryId={categoryData.id}/>}
		/>
	)
};