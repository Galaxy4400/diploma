import css from './container.module.scss';
import cn from 'classnames';

export const Container = ({ className = '', children, width }) => {
	return (
		<div className={cn(css['container'], className)} style={width ? { maxWidth: `${width}px` } : {}}>
			{children}
		</div>
	);
};
