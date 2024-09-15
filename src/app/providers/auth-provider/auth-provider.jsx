import { useDispatch } from "react-redux";
import { AuthContext } from "./auth-context";
import { userAction } from "../../store/reducers/user-reducer";
import { useCallback, useLayoutEffect, useState } from "react";
import { useServer } from "../server-provider";
import { SESSION_KEY_NAME } from "../../../shared/constants";

export const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const [isAuthInitialize, setIsAuthInitialize] = useState(false);
	const [registrationError, setRegistrationError] = useState(null);
	const [authorizeError, setAuthorizeError] = useState(null);

	const authorize = useCallback(async (login, password) => {
		const response = await requestServer.authorize(login, password);

		if (!response.ok) {
			setAuthorizeError(response.error);
			return
		};

		dispatch(userAction.setUser(response.data));
	}, [dispatch, requestServer]);


	const registration = useCallback(async (login, password) => {
		const response = await requestServer.register(login, password);
		
		if (!response.ok) {
			setRegistrationError(response.error);
			return;
		};

		authorize(login, password);
	}, [authorize, requestServer]);
	

	const logout = useCallback(async () => {
		await requestServer.logout();

		setAuthorizeError(null);
		setRegistrationError(null);

		dispatch(userAction.logout());
	}, [dispatch, requestServer]);


	useLayoutEffect(() => {
		const storageSession = sessionStorage.getItem(SESSION_KEY_NAME);

		if (!storageSession) {
			logout();
			setIsAuthInitialize(true);
			return;
		}
		
		requestServer.getAuthUser(storageSession)
			.then(({data}) => data && dispatch(userAction.setUser(data)))
			.then(() => setIsAuthInitialize(true));
			
	}, [dispatch, logout, requestServer]);

	return (
		<AuthContext.Provider value={{ authorize, registration, logout, authorizeError, registrationError }}>
			{isAuthInitialize && children}
		</AuthContext.Provider>
	);
}
