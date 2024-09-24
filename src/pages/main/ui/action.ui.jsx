import css from './action.module.scss';
import { Link } from "react-router-dom";
import { Icon } from "../../../shared/ui/icon";

export const Action = ({ to, title, icon }) => {
	return (
		<Link className={css['action']} to={to}>
			<figure className={css['image']}>
				<Icon name={icon} />
			</figure>
			<h4 className={css['title']}>{title}</h4>
		</Link>
	)
};