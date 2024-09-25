import css from './category-item.module.scss';
import { Link, useLocation } from "react-router-dom";
import { path } from "../../../shared/lib/router";
import { IconCategory } from '../../../shared/ui/icons';
import { getCategoryTypeName } from '../lib';

export const CategoryItem = ({ category, deleteSlot }) => {
	const location = useLocation();

	return (
		<div className={css['category']}>
			<Link className={css['main']} to={path.category.id(category.id)} state={{from: location}}>
				<figure className={css['figure']}>
					<IconCategory className={css['icon']} name={category.icon} />
				</figure>
				<div className={css['info']}>
					<span className={css['name']}>{category.name}</span>
					<span className={css['type']}>{getCategoryTypeName(category.typeId)}</span>
				</div>
			</Link>
			<div className={css['delete']}>
				{deleteSlot}
			</div>
		</div>
	)
};
