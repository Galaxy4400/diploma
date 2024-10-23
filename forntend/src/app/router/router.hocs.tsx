import { Navigate, useLocation } from 'react-router-dom';
import { WithElementProp } from '@/shared/types';
import { path } from '@/shared/lib/router';
import { useAuth } from '../providers/auth';

export const ProtectedRoute = ({ element }: WithElementProp) => {
	const location = useLocation();

	const { isAuth } = useAuth();

	return isAuth ? element : <Navigate to={path.login()} replace state={{ from: location }} />;
};

export const AuthenticationRoute = ({ element }: WithElementProp) => {
	const { isAuth } = useAuth();

	return isAuth ? <Navigate to={path.home()} replace /> : element;
};
