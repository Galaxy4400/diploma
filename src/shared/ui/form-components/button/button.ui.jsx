import css from './button.module.scss';

export const Button = ({ type = 'button', children }) => {
	return (
		<button className={css['button']} type={type}>{children}</button>
	)
};