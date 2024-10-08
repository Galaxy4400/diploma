import css from './modal.module.scss';
import { useModal } from '../../../../app/providers/modal/modal.use';
import { useClickAway } from '@uidotdev/usehooks';
import { Icon } from '../../icons';
import { ICON } from '../../../lib/icons';

export const Modal = ({ children }) => {
	const { isOpen, closeModal } = useModal();
	const clickAwayRef = useClickAway(() => closeModal());

	return (
		<div className={`${css['modal']} ${isOpen ? 'active' : ''}`}>
			<div className={css['container']} ref={clickAwayRef}>
				<button className={css['close']} onClick={() => closeModal()}>
					<Icon className={css['icon']} name={ICON.CROSS} />
				</button>
				{children}
			</div>
		</div>
	);
};
