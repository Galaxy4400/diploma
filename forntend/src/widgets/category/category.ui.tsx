import { useAsyncValue } from 'react-router-dom';
import { CategoryType, CategoryView } from 'entities/category';
import { CategoryDelete } from 'features/category';

export const Category = () => {
	const category = useAsyncValue() as CategoryType;

	return <CategoryView category={category} deleteSlot={<CategoryDelete categoryId={category.id} />} />;
};
