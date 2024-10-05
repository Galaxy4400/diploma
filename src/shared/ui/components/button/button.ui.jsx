import css from './button.module.scss';
import cn from 'classnames';

export const Button = ({ className = '', type = 'button', children, label, ...rest }) => {
	return (
		<button className={cn(className, css['button'])} type={type} {...rest}>
			{label || children}
		</button>
	);
};
