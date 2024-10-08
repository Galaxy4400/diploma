import css from './modal.module.scss';
import { Icon } from '../../icons';
import { ICON } from '../../../lib/icons';
import { createPortal } from 'react-dom';

export const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return createPortal(
		<div className={css['modal']}>
			<div className={css['container']}>
				<button className={css['close']} onClick={() => onClose()}>
					<Icon className={css['icon']} name={ICON.CROSS} />
				</button>
				{children}
			</div>
		</div>,
		document.getElementById('modal-root'),
	);
};
