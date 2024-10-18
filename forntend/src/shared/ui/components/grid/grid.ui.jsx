import css from './grid.module.scss';
import cn from 'classnames';

export const Grid = ({ className = '', columns = 1, gap = 0, children }) => {
	return (
		<div className={cn(css['grid'], className)} style={{ '--columns': columns, '--gap': gap }}>
			{children}
		</div>
	);
};
