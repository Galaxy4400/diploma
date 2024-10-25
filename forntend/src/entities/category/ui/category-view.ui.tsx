import css from './category-view.module.scss';
import { Link } from 'react-router-dom';
import { getCategoryType } from '../lib';
import { format } from 'date-fns';
import { Icons } from 'shared/types';
import { CategoryType } from '../model';
import { ReactNode } from 'react';
import { Block } from 'shared/ui/components';
import { DATETIME_FORMAT } from 'shared/constants';
import { Icon, IconCategory } from 'shared/ui/icons';
import { path } from 'shared/lib/router';

interface CategoryViewPropts {
	category: CategoryType;
	deleteSlot: ReactNode;
}

export const CategoryView = ({ category, deleteSlot }: CategoryViewPropts) => {
	return (
		<Block className={css['view']}>
			<h4>Категория №{category.id}</h4>
			<dl>
				<div>
					<dt>Дата:</dt>
					<dd>{format(category.createdAt, DATETIME_FORMAT)}</dd>
				</div>
				<div>
					<dt>Название:</dt>
					<dd>{category.name}</dd>
				</div>
				<div>
					<dt>Тип:</dt>
					<dd>{getCategoryType(category.type)?.name}</dd>
				</div>
				<div>
					<dt>Иконка:</dt>
					<dd>
						<IconCategory name={category.icon} />
					</dd>
				</div>
			</dl>
			<div className={css['actions']}>
				<Link className={css['edit-link']} to={path.category.edit(category.id)}>
					<Icon className={css['edit-icon']} name={Icons.edit} />
				</Link>
				{deleteSlot}
			</div>
		</Block>
	);
};
