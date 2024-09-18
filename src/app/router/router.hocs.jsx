import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../providers/auth";


export const ProtectedRoute = ({ element }) => {
	const location = useLocation();
	
	const { authUser } = useAuth();

	return authUser ? element : <Navigate to="/login" replace state={{from: location}} />;
};


export const AuthenticateRoute = ({ element }) => {
  const { authUser } = useAuth();

  return authUser ? <Navigate to="/" replace /> : element;
};