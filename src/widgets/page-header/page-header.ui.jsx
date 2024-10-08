import css from './page-header.module.scss';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../shared/ui/icons';
import { ICON } from '../../shared/lib/icons';

export const PageHeader = ({ title }) => {
	const navigate = useNavigate();

	return (
		<div className={css['main']}>
			<button className={css['button']} type="button" onClick={() => navigate(-1)}>
				<Icon className={css['icon']} name={ICON.BACK}></Icon>
				<span>Назад</span>
			</button>
			<h1>{title}</h1>
		</div>
	);
};
