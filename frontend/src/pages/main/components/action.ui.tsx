import css from './action.module.scss';
import { Link } from 'react-router-dom';
import { Icon } from 'shared/ui/icons';
import { Icons } from 'shared/types';

interface ActionProps {
	to: string;
	title: string;
	icon: Icons;
}

export const Action = ({ to, title, icon }: ActionProps) => {
	return (
		<Link className={css['action']} to={to}>
			<figure className={css['image']}>
				<Icon name={icon} />
			</figure>
			<h5 className={css['title']}>{title}</h5>
		</Link>
	);
};
