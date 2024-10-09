import css from './modal.module.scss';
import { Icon } from '../../icons';
import { ICON } from '../../../lib/icons';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

export const Modal = ({ isOpen, onClose, children }) => {
	const [isClosing, setIsClosing] = useState(false);

	const modalRoot = document.getElementById('modal-root');

	useEffect(() => {
		if (isOpen) {
			modalRoot.classList.add('active');
		} else {
			setIsClosing(true);

			modalRoot.classList.remove('active');

			const timer = setTimeout(() => {
				setIsClosing(false);
			}, 1000);

			return () => clearTimeout(timer);
		}
	}, [isOpen, modalRoot]);

	if (!isOpen && !isClosing) return null;

	const ModalComponent = () => (
		<div className={css['modal']}>
			<div className={css['container']}>
				<button className={css['close']} onClick={() => onClose()}>
					<Icon className={css['icon']} name={ICON.CROSS} />
				</button>
				{children}
			</div>
		</div>
	);

	return createPortal(<ModalComponent />, modalRoot);
};
