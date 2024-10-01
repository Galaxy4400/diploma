import css from './categories.module.scss';
import { useAsyncValue } from 'react-router-dom';
import { CategoryItem } from '../../entities/category';
import { CategoryDelete } from '../../features/category';
import { Block } from '../../shared/ui/components';

export const Categories = () => {
	const categories = useAsyncValue();

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
