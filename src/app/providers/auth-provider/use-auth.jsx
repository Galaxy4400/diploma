import { useContext } from "react";
import { AuthContext } from "./auth-context";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/reducers/user-reducer";

export const useAuth = () => {
	const { login, logout } = useContext(AuthContext);

	const session = useSelector(userSelector.userSession);

	const isAuth = !!session;

	return { isAuth, login, logout };
};