import { useAsyncValue } from 'react-router-dom';
import { CategoryDelete } from 'features/category';
import { CategoryType } from 'shared/api/category';
import { CategoryView } from 'entities/category/category-view';

export const Category = () => {
	const category = useAsyncValue() as CategoryType;

	return <CategoryView category={category} deleteSlot={<CategoryDelete categoryId={category.id} />} />;
};
