import { AuthProvider } from './auth';
import { ModalProvider } from './modal';
import { StoreProvider } from './store';
import { ToastProvider } from './toast';

interface MainLayoutProps {
	children: React.ReactNode;
}

export const Providers = ({ children }: MainLayoutProps) => {
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
