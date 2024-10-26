import css from './logo.module.scss';
import { Link } from 'react-router-dom';
import { Icon } from 'shared/ui/icons';
import { path } from 'shared/lib/router';
import { Icons } from 'shared/types';

export const Logo = () => {
	return (
		<Link className={css['logo']} to={path.home()}>
			<Icon className={css['icon']} name={Icons.wallet} />
			<div className={css['label']}>Учет доходов и расходов</div>
		</Link>
	);
};
