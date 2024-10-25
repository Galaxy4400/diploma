import css from './category-view.module.scss';
import { Link } from 'react-router-dom';
import { path } from '../../../shared/lib/router';
import { getCategoryType } from '../lib';
import { Icon, IconCategory } from '../../../shared/ui/icons';
import { Block } from '../../../shared/ui/components';
import { format } from 'date-fns';
import { DATETIME_FORMAT } from '../../../shared/constants/datetime-format';
import { Icons } from '@/shared/types';

export const CategoryView = ({ category, deleteSlot }) => {
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
