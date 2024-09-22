import { useDispatch } from "react-redux";
import { AuthContext } from "./auth.context";
import { useCallback, useLayoutEffect, useState } from "react";
import { resetAuth, setAuth } from "../../../entities/auth";
import { SESSION_KEY_NAME } from "../../../shared/lib/session";
import { server } from "../../../shared/bff";

export const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();
	const [isAuthInitialize, setIsAuthInitialize] = useState(false);
	const [registrationError, setRegistrationError] = useState(null);
	const [authorizeError, setAuthorizeError] = useState(null);

	const authorize = useCallback(async (login, password) => {
		const { data: authUser, ok, error} = await server.authorize(login, password);

		if (!ok) {
			setAuthorizeError(error);
			return;
		};

		dispatch(setAuth(authUser));

		sessionStorage.setItem(SESSION_KEY_NAME, authUser.session);
	}, [dispatch]);


	const registration = useCallback(async (login, password) => {
		const response = await server.register(login, password);
		
		if (!response.ok) {
			setRegistrationError(response.error);
			return;
		};

		authorize(login, password);
	}, [authorize]);
	

	const logout = useCallback(async () => {
		await server.logout();

		setAuthorizeError(null);
		setRegistrationError(null);

		dispatch(resetAuth());

		sessionStorage.removeItem(SESSION_KEY_NAME);
	}, [dispatch]);


	useLayoutEffect(() => {
		const storageSession = sessionStorage.getItem(SESSION_KEY_NAME);

		if (!storageSession) {
			logout();
			setIsAuthInitialize(true);
			return;
		}
		
		server.getAuthUser(storageSession)
			.then(({data: user}) => user && dispatch(setAuth(user)))
			.then(() => setIsAuthInitialize(true));
			
	}, [dispatch, logout]);

	return (
		<AuthContext.Provider value={{ authorize, registration, logout, authorizeError, registrationError }}>
			{isAuthInitialize && children}
		</AuthContext.Provider>
	);
}
