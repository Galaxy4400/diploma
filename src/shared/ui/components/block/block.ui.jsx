import css from './block.module.scss';

export const Block = ({ className = '', children }) => {
	return (
		<div className={`${className} ${css['block']}`}>
			{children}
		</div>
	)
};