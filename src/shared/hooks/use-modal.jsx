// import { useState } from 'react';
// import { createPortal } from 'react-dom';

// export const useModal = () => {
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [content, setContent] = useState(null);

// 	const openModal = (modalContent) => {
// 		setContent(modalContent);
// 		setIsOpen(true);
// 	};

// 	const closeModal = () => {
// 		setIsOpen(false);
// 		setContent(null);
// 	};

// 	const ModalComponent = () => {
// 		if (!isOpen || !content) return null;

// 		const modalRoot = document.getElementById('modal');
// 		return createPortal(
// 			<div className="modal-overlay" onClick={closeModal}>
// 				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
// 					<button onClick={closeModal}>Close</button>
// 					{content}
// 				</div>
// 			</div>,
// 			modalRoot,
// 		);
// 	};

// 	return { openModal, closeModal, ModalComponent };
// };
