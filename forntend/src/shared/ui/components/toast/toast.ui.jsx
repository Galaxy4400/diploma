import css from './toast.module.scss';
import cn from 'classnames';
import { useToast, useToastState } from '../../../../app/providers/toast';
import { Icon } from '../../icons';
import { ICON } from '../../../lib/icons';

export const Toast = () => {
	const { isOpen, type, message } = useToastState();
	const { closeToast } = useToast();

	return (
		<div className={cn(css['toast'], type, isOpen ? 'active' : '')}>
			<button className={css['close']} onClick={() => closeToast()}>
				<Icon className={css['icon']} name={ICON.CROSS} />
			</button>
			{message}
		</div>
	);
};
