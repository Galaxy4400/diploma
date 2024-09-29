import css from './layout-wrapper.module.scss';

export const LayoutWrapper = ({ children }) => {
	return <div className={css['wrapper']}>{children}</div>;
};
