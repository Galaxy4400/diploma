import { Link, useAsyncValue } from "react-router-dom";
import { path } from "../../shared/lib/router";
import { CategoryItem } from "../../entities/category";
import { CategoryDelete } from "../../features/category";

export const CategoriesList = () => {
	const categories = useAsyncValue();

	return (
		<div style={{padding: '10px', border: '1px solid #fff', maxWidth: '300px'}}>
			<h2>СПИСОК КАТЕГОРИЙ</h2>
			<div>
				<ul style={{display: 'grid', gap: '10px'}}>
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
		</div>
	)
};