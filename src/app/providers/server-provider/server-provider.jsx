import { useServerRequest } from "./hooks/use-server-request";
import { ServerContext } from "./server-context";

export const ServerProvider = ({ children }) => {
	const { requestServer, serverError } = useServerRequest();

	return (
		<ServerContext.Provider value={{ requestServer, serverError }}>
			{children}
		</ServerContext.Provider>
	);
}
