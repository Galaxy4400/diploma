import { AuthProvider } from "./auth-provider"
import { ServerProvider } from "./server-provider";
import { StoreProvider } from "./store-provider";

export const Providers = ({ children }) => {
	return (
		<StoreProvider>
			<ServerProvider>
				<AuthProvider>
					{children}
				</AuthProvider>
			</ServerProvider>
		</StoreProvider>
	);
};
