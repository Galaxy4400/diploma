import { useDispatch } from "react-redux";
import { AuthContext } from "./auth-context";
import { userAction } from "../../store/reducers/user-reducer";
import { useCallback, useLayoutEffect, useState } from "react";
import { useServer } from "../server-provider";
import { SESSION_KEY_NAME } from "../../../shared/constants";

export const AuthProvider = ({ children }) => {
	const [isAuthInitialize, setIsAuthInitialize] = useState(false);

	const dispatch = useDispatch();

	const { requestServer } = useServer();

	const authorize = useCallback((user) => {
		dispatch(userAction.setUser(user));
	}, [dispatch]);
	
	const logout = useCallback(() => {
		dispatch(userAction.logout());
	}, [dispatch]);

	useLayoutEffect(() => {
		const storageSession = sessionStorage.getItem(SESSION_KEY_NAME);

		if (!storageSession) {
			logout();
			setIsAuthInitialize(true);
			return;
		}
		
		requestServer.getAuthUser(storageSession)
			.then((user) => user && authorize(user))
			.then(() => setIsAuthInitialize(true));
	}, [authorize, logout, requestServer]);

	return (
		<AuthContext.Provider value={{ authorize, logout }}>
			{isAuthInitialize && children}
		</AuthContext.Provider>
	);
}
