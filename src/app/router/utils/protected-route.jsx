import { Navigate } from "react-router-dom";
import { useAuth } from "../../providers/auth-provider";

export const ProtectedRoute = ({ element }) => {
	const { isAuth } = useAuth();

	return isAuth ? element : <Navigate to="/login" replace />;
};