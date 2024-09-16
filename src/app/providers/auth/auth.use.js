import { useContext } from "react";
import { AuthContext } from "./auth.context";
import { useSelector } from "react-redux";
import { selectAuthUserSession } from "../../../entities/auth-user";

export const useAuth = () => {
	const { ...contextData } = useContext(AuthContext);

	const session = useSelector(selectAuthUserSession);

	const isAuth = !!session;

	return { ...contextData, isAuth };
};