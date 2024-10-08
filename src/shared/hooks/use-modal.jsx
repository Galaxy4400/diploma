import { useState } from 'react';
import { Modal } from '../ui/components/modal';

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const ModalPortal = ({ children }) => (
		<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
			{children}
		</Modal>
	);

	return { openModal, closeModal, ModalPortal };
};
