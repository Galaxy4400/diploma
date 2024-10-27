import css from './categories-main.module.scss';
import { CategoryDelete } from 'features/category';
import { Block } from 'shared/ui/components';
import { CategoryItem, selectCategoryList } from 'entities/category/category-list';
import { useAppSelector } from 'shared/lib/store';

export const CategoriesMain = () => {
	const categories = useAppSelector(selectCategoryList);

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
