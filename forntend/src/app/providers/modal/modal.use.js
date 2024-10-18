import { useContext } from 'react';
import { ModalFunctionContext, ModalStateContext } from './modal.context';

export const useModal = () => useContext(ModalFunctionContext);

export const useModalState = () => useContext(ModalStateContext);
