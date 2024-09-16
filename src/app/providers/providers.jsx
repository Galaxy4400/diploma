import { AuthProvider } from "./auth";
import { ServerProvider } from "./server";
import { StoreProvider } from "./store";

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
