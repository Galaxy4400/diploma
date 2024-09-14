import { useSelector } from "react-redux";
import { userSelector } from "../../../store/reducers/user-reducer";
import { useMemo, useState } from "react";
import { server } from "../../../../shared/bff";


export const useServerRequest = () => {
	const session = useSelector(userSelector.userSession);

	const [serverError, setServerError] = useState(null);

	const requestServer = useMemo(() => {
		const enhancedServerMethods = {};

		Object.keys(server).forEach((method) => {
			enhancedServerMethods[method] = (...params) => server[method](session, ...params)
				.then(({ error, res }) => {
					setServerError(error);
					return res;
				});
		});

		return enhancedServerMethods;
	}, [session]);

	return { requestServer, serverError };
};