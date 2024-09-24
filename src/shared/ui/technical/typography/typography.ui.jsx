import css from './typography.module.scss';

export const Typography = ({ className = '', children }) => {
	return (
		<div className={`${className} ${css['typography']}`}>
			{children}
		</div>
	)
};