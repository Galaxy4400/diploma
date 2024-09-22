import css from "./loader.module.scss";

export const Loader = ({ className = '', isLoading = false, children, ...rest }) => {
	return (
		<div className={`${className} ${css['container']}`} {...rest} >
			{children}
			<div className={`${css['loader']} ${isLoading ? css['active'] : ''}`}>
				<span>Loading...</span>
			</div>
		</div>
	)
};