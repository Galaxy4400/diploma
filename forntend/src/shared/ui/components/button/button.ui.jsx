import css from './button.module.scss';
import cn from 'classnames';

export const Button = ({ className = '', type = 'button', children, label, loading, ...rest }) => {
	return (
		<button className={cn(className, css['button'], loading ? 'loading' : '')} type={type} {...rest}>
			{label || children}
		</button>
	);
};
