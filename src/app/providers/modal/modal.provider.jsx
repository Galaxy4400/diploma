import { useCallback, useMemo, useState } from 'react';
import { ModalFunctionContext, ModalStateContext } from './modal.context';
import { Modal } from '../../../shared/ui/components';

export const ModalProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState(null);

	const openModal = useCallback((content) => {
		setContent(content);
		setIsOpen(true);
	}, []);

	const closeModal = useCallback(() => setIsOpen(false), []);

	const modalFunctions = useMemo(() => ({ openModal, closeModal }), [openModal, closeModal]);

	const modalState = useMemo(() => ({ isOpen, content }), [isOpen, content]);

	return (
		<ModalFunctionContext.Provider value={modalFunctions}>
			<ModalStateContext.Provider value={modalState}>
				{children}
				<Modal />
			</ModalStateContext.Provider>
		</ModalFunctionContext.Provider>
	);
};
