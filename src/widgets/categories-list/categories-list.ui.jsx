import { Link, useAsyncValue } from "react-router-dom";
import { path } from "../../shared/lib/router";
import { CategoryItem } from "../../entities/category";
import { CategoryDelete } from "../../features/category";
import { Block } from "../../shared/ui/components";

export const CategoriesList = () => {
	const categories = useAsyncValue();

	return (
		<Block>
			<h2>СПИСОК КАТЕГОРИЙ</h2>
			<div>
				<ul>
					{categories?.map(category => (
						<CategoryItem 
							key={category.id} 
							categoryData={category}
							deleteSlot={<CategoryDelete categoryId={category.id}/>}
						/>
					))}
				</ul>
			</div>
			<div>
				<Link to={path.category.create()}>Добавить новую категорию</Link>
			</div>
		</Block>
	)
};