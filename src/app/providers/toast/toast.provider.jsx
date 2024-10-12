import { useCallback, useMemo, useState } from 'react';
import { ToastFunctionContext, ToastStateContext } from './toast.context';
import { Toast } from '../../../shared/ui/components';

export const ToastProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [content, setContent] = useState(null);

	const showToast = useCallback((content, time = 3000) => {
		setContent(content);
		setIsOpen(true);

		setTimeout(() => {
			setIsOpen(false);
		}, time);
	}, []);

	const closeToast = useCallback(() => setIsOpen(false), []);

	const toastFunctions = useMemo(() => ({ showToast, closeToast }), [showToast, closeToast]);

	const toastState = useMemo(() => ({ isOpen, content }), [isOpen, content]);

	return (
		<ToastFunctionContext.Provider value={toastFunctions}>
			<ToastStateContext.Provider value={toastState}>
				{children}
				<Toast />
			</ToastStateContext.Provider>
		</ToastFunctionContext.Provider>
	);
};
