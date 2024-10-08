import { AuthProvider } from './auth';
import { StoreProvider } from './store';

export const Providers = ({ children }) => {
	return (
		<StoreProvider>
			<AuthProvider>{children}</AuthProvider>
		</StoreProvider>
	);
};
