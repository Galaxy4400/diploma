import css from './category-item.module.scss';
import { Link, useLocation } from "react-router-dom";
import { path } from "../../../shared/lib/router";

export const CategoryItem = ({ category, deleteSlot }) => {
	const location = useLocation();

	return (
		<div className={css['category']}>
			<Link className={css['main']} to={path.category.id(category.id)} state={{from: location}}>
				<figure className={css['figure']}>
					{/* <Icon className={css['icon']} name={getAccountTypeImage(category.typeId)} /> */}
				</figure>
				<div className={css['info']}>
					<span className={css['name']}>{category.name}</span>
				</div>
			</Link>
			<div className={css['delete']}>
				{deleteSlot}
			</div>
		</div>
	)
};
