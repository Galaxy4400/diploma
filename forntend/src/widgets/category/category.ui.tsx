import { useAsyncValue } from 'react-router-dom';
import { CategoryView } from 'entities/category';
import { CategoryDelete } from 'features/category';
import { CategoryType } from 'shared/api/category';

export const Category = () => {
	const category = useAsyncValue() as CategoryType;

	return <CategoryView category={category} deleteSlot={<CategoryDelete categoryId={category.id} />} />;
};
