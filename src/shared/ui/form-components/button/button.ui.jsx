import css from './button.module.scss';

export const Button = ({ type = 'button', children, label, ...rest }) => {
	return (
		<button className={css['button']} type={type} {...rest}>
			{label || children}
		</button>
	);
};
