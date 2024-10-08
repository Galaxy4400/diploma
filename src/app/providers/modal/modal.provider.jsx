import { useState } from 'react';
import { ModalContext } from './modal.context';
import { Modal } from './modal.ui';

export const ModalProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState(null);

	const openModal = (content) => {
		setContent(content);
		setIsOpen(true);
	};

	const closeModal = () => setIsOpen(false);

	return (
		<ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
			{children}
			<Modal>{content}</Modal>
		</ModalContext.Provider>
	);
};
