import css from './category-view.module.scss';
import { Link } from 'react-router-dom';
import { path } from '../../../shared/lib/router';
import { getCategoryType } from '../lib';
import { Icon, IconCategory } from '../../../shared/ui/icons';
import { Block } from '../../../shared/ui/components';
import { ICON } from '../../../shared/lib/icons';

export const CategoryView = ({ category, deleteSlot }) => {
	return (
		<Block className={css['view']}>
			<h4>Категория №{category.id}</h4>
			<dl>
				<div>
					<dt>Дата:</dt>
					<dd>{category.createdAt}</dd>
				</div>
				<div>
					<dt>Название:</dt>
					<dd>{category.name}</dd>
				</div>
				<div>
					<dt>Тип:</dt>
					<dd>{getCategoryType(category.typeId)?.name}</dd>
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
					<Icon className={css['edit-icon']} name={ICON.EDIT} />
				</Link>
				{deleteSlot}
			</div>
		</Block>
	);
};
