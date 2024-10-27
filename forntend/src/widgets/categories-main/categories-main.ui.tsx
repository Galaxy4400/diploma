import css from './categories-main.module.scss';
import { useAsyncValue } from 'react-router-dom';
import { CategoryDelete } from 'features/category';
import { Block } from 'shared/ui/components';
import { CategoryType } from 'shared/api/category';
import { CategoryItem } from 'entities/category/category-data';

export const CategoriesMain = () => {
	const categories = useAsyncValue() as CategoryType[];

	return (
		<Block className={css['main']}>
			<h4 className={css['title']}>Список категорий</h4>
			<div className={css['list']}>
				{categories?.map((category) => (
					<CategoryItem
						key={category.id}
						category={category}
						deleteSlot={<CategoryDelete categoryId={category.id} />}
					/>
				))}
			</div>
		</Block>
	);
};
