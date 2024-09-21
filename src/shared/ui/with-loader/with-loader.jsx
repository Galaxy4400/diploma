import css from "./with-loader.module.scss";

export const WithLoader = ({ className = '', isLoading = false, children, ...rest }) => {
	return (
		<div className={`${className} ${css['container']}`} {...rest} >
			{children}
			<div className={`${css['loader']} ${isLoading ? css['active'] : ''}`}>
				<span>Loading...</span>
			</div>
		</div>
	)
};