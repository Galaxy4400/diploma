import css from './button.module.scss';

export const Button = ({ type = 'button', children, ...rest }) => {
	return (
		<button className={css['button']} type={type} {...rest}>
			{children}
		</button>
	);
};
