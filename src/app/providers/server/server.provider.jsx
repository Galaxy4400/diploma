import { useSelector } from "react-redux";
import { ServerContext } from "./server.context";
import { useMemo } from "react";
import { server } from "../../../shared/bff";
import { selectAuthSession } from "../../../entities";

export const ServerProvider = ({ children }) => {
	const session = useSelector(selectAuthSession);

	const requestServer = useMemo(() => {
		const enhancedServerMethods = {};

		Object.keys(server).forEach((method) => {
			enhancedServerMethods[method] = (...params) => server[method](session, ...params)
		});

		return enhancedServerMethods;
	}, [session]);

	return (
		<ServerContext.Provider value={{ requestServer }}>
			{children}
		</ServerContext.Provider>
	);
}
