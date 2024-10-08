import css from './modal.module.scss';
import React from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div className={css['modal-overlay']} onClick={onClose}>
			<div className={css['modal-content']} onClick={(e) => e.stopPropagation()}>
				<button className={css['modal-close']} onClick={onClose}>
					X
				</button>
				{children}
			</div>
		</div>,
		document.getElementById('modal-root'),
	);
};
