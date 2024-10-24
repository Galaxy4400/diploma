import { Navigate, useLocation } from 'react-router-dom';
import { PropsWithElement } from '@/shared/types';
import { path } from '@/shared/lib/router';
import { useAuth } from '../providers/auth';

export const ProtectedRoute = ({ element }: PropsWithElement) => {
	const location = useLocation();

	const { isAuth } = useAuth();

	return isAuth ? element : <Navigate to={path.login()} replace state={{ from: location }} />;
};

export const AuthenticationRoute = ({ element }: PropsWithElement) => {
	const { isAuth } = useAuth();

	return isAuth ? <Navigate to={path.home()} replace /> : element;
};
