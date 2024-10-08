import { useEffect, useState } from 'react';
import { Modal } from '../ui/components/modal';

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	// TODO избавиться от резкого скрола наверх при открытии модального окна
	useEffect(() => {
		const body = document.querySelector('body');

		isOpen ? body.classList.add('lock') : body.classList.remove('lock');
	}, [isOpen]);

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
