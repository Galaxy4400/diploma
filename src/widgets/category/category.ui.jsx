import { useAsyncValue } from 'react-router-dom';
import { CategoryView } from '../../entities/category';
import { CategoryDelete } from '../../features/category';

export const Category = () => {
	const category = useAsyncValue();

	return (
		<CategoryView category={category} deleteSlot={<CategoryDelete categoryId={category.id} />} />
	);
};
