import { WithChildrenProp } from '@/shared/types';
import { AuthProvider } from './auth';
import { ModalProvider } from './modal';
import { StoreProvider } from './store';
import { ToastProvider } from './toast';

export const Providers = ({ children }: WithChildrenProp) => {
	return (
		<StoreProvider>
			<AuthProvider>
				<ModalProvider>
					<ToastProvider>{children}</ToastProvider>
				</ModalProvider>
			</AuthProvider>
		</StoreProvider>
	);
};
