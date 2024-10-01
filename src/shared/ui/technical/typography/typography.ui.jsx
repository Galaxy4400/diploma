import css from './typography.module.scss';

export const Typography = ({ children }) => {
	return <div className={css['typography']}>{children}</div>;
};
