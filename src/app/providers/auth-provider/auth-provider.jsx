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


	const authorize = useCallback(async (login, password) => {
		const authUser = await requestServer.authorize(login, password);

		if (!authUser) return;

		dispatch(userAction.setUser(authUser));
	}, [dispatch, requestServer]);


	const register = useCallback(async (login, password) => {
		const createdUser = await requestServer.register(login, password);
		
		if (!createdUser) return;

		authorize(login, password);
	}, [authorize, requestServer]);
	

	const logout = useCallback(async () => {
		await requestServer.logout();

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
			.then((user) => user && dispatch(userAction.setUser(user)))
			.then(() => setIsAuthInitialize(true));
			
	}, [dispatch, logout, requestServer]);


	return (
		<AuthContext.Provider value={{ authorize, register, logout }}>
			{isAuthInitialize && children}
		</AuthContext.Provider>
	);
}
