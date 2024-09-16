import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../providers/auth";


export const ProtectedRoute = ({ element }) => {
	const location = useLocation();
	
	const { isAuth } = useAuth();

	return isAuth ? element : <Navigate to="/login" replace state={{from: location}} />;
};


export const AuthenticateRoute = ({ element }) => {
  const { isAuth } = useAuth();

  return isAuth ? <Navigate to="/" replace /> : element;
};