import { useDispatch } from "react-redux";
import { AuthContext } from "./auth-context";
import { userAction } from "../../store/reducers/user-reducer";
import { useLayoutEffect } from "react";
import { useServer } from "../server-provider";

export const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();

	const { requestServer } = useServer();

	const login = (user) => {
		dispatch(userAction.setUser(user));
	};
	
	const logout = () => {
		dispatch(userAction.logout());
	};

	useLayoutEffect(() => {
		const storageSession = sessionStorage.getItem('session');
		
		if (!storageSession) {
			logout();
			return;
		}
		
		requestServer.getAuthUser(storageSession).then(login);
	}, []);

	return (
		<AuthContext.Provider value={{ login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
