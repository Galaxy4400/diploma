import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../providers/auth';
import { path } from '../../shared/lib/router';

export const ProtectedRoute = ({ element }) => {
	const location = useLocation();

	const { isAuth } = useAuth();

	return isAuth ? element : <Navigate to={path.login()} replace state={{ from: location }} />;
};

export const AuthenticationRoute = ({ element }) => {
	const { isAuth } = useAuth();

	return isAuth ? <Navigate to={path.home()} replace /> : element;
};
