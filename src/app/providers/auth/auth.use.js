import { useContext } from "react";
import { AuthContext } from "./auth.context";
import { useSelector } from "react-redux";
import { selectAuthSession } from "../../../entities";

export const useAuth = () => {
	const { ...contextData } = useContext(AuthContext);

	const session = useSelector(selectAuthSession);

	const isAuth = !!session;

	return { ...contextData, isAuth };
};