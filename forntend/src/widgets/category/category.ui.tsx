import { CategoryDelete } from 'features/category';
import { CategoryView, selectCategoryData } from 'entities/category/category-data';
import { useAppSelector } from 'shared/lib/store';

export const Category = () => {
	const category = useAppSelector(selectCategoryData);

	return <CategoryView category={category} deleteSlot={<CategoryDelete categoryId={category.id} />} />;
};
