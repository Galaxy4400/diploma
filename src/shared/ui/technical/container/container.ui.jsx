import css from './container.module.scss';

export const Container = ({ className = '', children, width }) => {
	return (
		<div
			className={`${className} ${css['container']}`}
			style={width ? { maxWidth: `${width}px` } : {}}
		>
			{children}
		</div>
	);
};
