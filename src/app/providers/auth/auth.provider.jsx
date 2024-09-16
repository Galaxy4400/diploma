import { useDispatch } from "react-redux";
import { AuthContext } from "./auth.context";
import { useCallback, useLayoutEffect, useState } from "react";
import { useServer } from "../server";
import { SESSION_KEY_NAME } from "../../../shared/constants";
import { resetAuthUser, setAuthUser } from "../../../entities/auth-user";

export const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	const [isAuthInitialize, setIsAuthInitialize] = useState(false);
	const [registrationError, setRegistrationError] = useState(null);
	const [authorizeError, setAuthorizeError] = useState(null);

	const authorize = useCallback(async (login, password) => {
		const { data: authUser, ok, error} = await requestServer.authorize(login, password);

		if (!ok) {
			setAuthorizeError(error);
			return;
		};

		dispatch(setAuthUser(authUser));

		sessionStorage.setItem(SESSION_KEY_NAME, authUser.session);
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

		dispatch(resetAuthUser());

		sessionStorage.removeItem(SESSION_KEY_NAME);
	}, [dispatch, requestServer]);


	useLayoutEffect(() => {
		const storageSession = sessionStorage.getItem(SESSION_KEY_NAME);

		if (!storageSession) {
			logout();
			setIsAuthInitialize(true);
			return;
		}
		
		requestServer.getAuthUser(storageSession)
			.then(({data: user}) => user && dispatch(setAuthUser(user)))
			.then(() => setIsAuthInitialize(true));
			
	}, [dispatch, logout, requestServer]);

	return (
		<AuthContext.Provider value={{ authorize, registration, logout, authorizeError, registrationError }}>
			{isAuthInitialize && children}
		</AuthContext.Provider>
	);
}
