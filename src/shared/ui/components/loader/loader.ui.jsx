import css from './loader.module.scss';
import cn from 'classnames';

export const Loader = ({ isLoading = false, children, ...rest }) => {
	return (
		<div className={css['container']} {...rest}>
			{children}
			<div className={cn(css['loader'], isLoading ? css['active'] : '')}>
				<span>Loading...</span>
			</div>
		</div>
	);
};
