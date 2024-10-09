import css from './modal.module.scss';
import { useModal, useModalState } from '../../../../app/providers/modal';
import { useClickAway } from '@uidotdev/usehooks';
import { Icon } from '../../icons';
import { ICON } from '../../../lib/icons';

export const Modal = () => {
	const { isOpen, content } = useModalState();
	const { closeModal } = useModal();
	const clickAwayRef = useClickAway(() => closeModal());

	return (
		<div className={`${css['modal']} ${isOpen ? 'active' : ''}`}>
			<div className={css['container']} ref={clickAwayRef}>
				<button className={css['close']} onClick={() => closeModal()}>
					<Icon className={css['icon']} name={ICON.CROSS} />
				</button>
				{content}
			</div>
		</div>
	);
};
