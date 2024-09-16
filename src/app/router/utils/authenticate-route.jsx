import { Navigate } from "react-router-dom";
import { useAuth } from "../../providers/auth";

export const AuthenticateRoute = ({ element }) => {
  const { isAuth } = useAuth();

  return isAuth ? <Navigate to="/" replace /> : element;
};