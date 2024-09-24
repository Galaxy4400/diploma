import css from "./container.module.scss";

export const Container = ({ children, width }) => {
	return (
		<div className={css['container']} style={width ? {maxWidth: `${width}px`} : {}}>
			{children}
		</div>
	)
};