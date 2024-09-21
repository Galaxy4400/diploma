import css from "./with-loader.module.scss";

export const WithLoader = ({ className = '', isLoading = false, children }) => {
	return (
		<div className={`${className} ${css['container']}`}>
			{children}
			<div className={`${css['loader']} ${isLoading ? css['active'] : ''}`}>
				<span>Loading...</span>
			</div>
		</div>
	)
};