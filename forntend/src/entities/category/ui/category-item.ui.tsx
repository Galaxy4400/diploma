import css from './category-item.module.scss';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCategoryTypeName } from '../lib';
import { CategoryType } from '../model';
import { IconCategory } from 'shared/ui/icons';
import { path } from 'shared/lib/router';

interface CategoryItemPropts {
	category: CategoryType;
	deleteSlot: ReactNode;
}

export const CategoryItem = ({ category, deleteSlot }: CategoryItemPropts) => {
	const location = useLocation();

	return (
		<div className={css['category']}>
			<Link className={css['main']} to={path.category.id(category.id)} state={{ from: location }}>
				<figure className={css['figure']}>
					<IconCategory className={css['icon']} name={category.icon} />
				</figure>
				<div className={css['info']}>
					<span className={css['name']}>{category.name}</span>
					<span className={css['type']}>{getCategoryTypeName(category.type)}</span>
				</div>
			</Link>
			<div className={css['delete']}>{deleteSlot}</div>
		</div>
	);
};
