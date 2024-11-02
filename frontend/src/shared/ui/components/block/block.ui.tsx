import css from './block.module.scss';
import cn from 'classnames';
import { HTMLAttributes } from 'react';

export const Block = ({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={cn(css['block'], className)} {...rest}>
			{children}
		</div>
	);
};
