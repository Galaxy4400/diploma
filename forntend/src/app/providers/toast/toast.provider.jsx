import { useCallback, useMemo, useState } from 'react';
import { ToastFunctionContext, ToastStateContext } from './toast.context';
import { Toast } from '../../../shared/ui/components';

export const ToastProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState(null);
	const [type, setType] = useState('');

	const showToast = useCallback(({ message: initMessage, type: initType = '', time = 5000 }) => {
		setType(initType);
		setMessage(initMessage);
		setIsOpen(true);

		setTimeout(() => {
			setIsOpen(false);
		}, time);
	}, []);

	const closeToast = useCallback(() => setIsOpen(false), []);

	const toastFunctions = useMemo(() => ({ showToast, closeToast }), [showToast, closeToast]);

	const toastState = useMemo(() => ({ isOpen, message, type }), [isOpen, message, type]);

	return (
		<ToastFunctionContext.Provider value={toastFunctions}>
			<ToastStateContext.Provider value={toastState}>
				{children}
				<Toast />
			</ToastStateContext.Provider>
		</ToastFunctionContext.Provider>
	);
};
