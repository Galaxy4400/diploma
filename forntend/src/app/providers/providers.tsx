import { WithChildren } from '@/shared/types';
import { AuthProvider } from './auth';
import { ModalProvider } from './modal';
import { StoreProvider } from './store';
import { ToastProvider } from './toast';

export const Providers = ({ children }: WithChildren) => {
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
