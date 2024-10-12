import css from './toast.module.scss';
import { useToast, useToastState } from '../../../../app/providers/toast';
import { Icon } from '../../icons';
import { ICON } from '../../../lib/icons';

export const Toast = () => {
	const { isOpen, content } = useToastState();
	const { closeToast } = useToast();

	return (
		<div className={`${css['toast']} ${isOpen ? 'active' : ''}`}>
			<button className={css['close']} onClick={() => closeToast()}>
				<Icon className={css['icon']} name={ICON.CROSS} />
			</button>
			{content}
		</div>
	);
};
