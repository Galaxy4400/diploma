import css from './block.module.scss';
import cn from 'classnames';

export const Block = ({ className = '', children }) => {
	return <div className={cn(css['block'], className)}>{children}</div>;
};
