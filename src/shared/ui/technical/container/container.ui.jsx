import css from "./container.module.scss";

export const Container = ({ className = '', children }) => {
	return (
		<div className={`${css['container']} ${className}`}>
			{children}
		</div>
	)
};