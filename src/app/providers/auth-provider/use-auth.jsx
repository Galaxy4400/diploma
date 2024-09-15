import { useContext } from "react";
import { AuthContext } from "./auth-context";
import { useSelector } from "react-redux";
import { authUserSessionSelector } from "../../../entities/auth-user";

export const useAuth = () => {
	const { ...contextData } = useContext(AuthContext);

	const session = useSelector(authUserSessionSelector);

	const isAuth = !!session;

	return { ...contextData, isAuth };
};