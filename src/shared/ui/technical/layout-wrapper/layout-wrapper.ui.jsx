import css from "./layout-wrapper.module.scss";

export const LayoutWrapper = ({ className = '', children }) => {
	return (
		<div className={`${className} ${css['wrapper']}`}>{children}</div>
	)
};