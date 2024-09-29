import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../providers/auth';
import { path } from '../../shared/lib/router';

export const ProtectedRoute = ({ element }) => {
	const location = useLocation();

	const { authUser } = useAuth();

	return authUser ? element : <Navigate to={path.login()} replace state={{ from: location }} />;
};

export const AuthenticationRoute = ({ element }) => {
	const { authUser } = useAuth();

	return authUser ? <Navigate to={path.home()} replace /> : element;
};
