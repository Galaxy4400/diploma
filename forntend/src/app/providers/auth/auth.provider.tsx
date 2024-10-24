import { useDispatch } from 'react-redux';
import { AuthContextType, AuthResponse } from './auth.types';
import { createContext, useCallback, useContext, useLayoutEffect, useState } from 'react';
import { WithChildren } from '@/shared/types';
import { request } from '@/shared/api';
import { resetAuth, setAuth } from '@/entities/auth';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: WithChildren) => {
	const dispatch = useDispatch();
	const [isAuthInitialize, setIsAuthInitialize] = useState(false);
	const [isAuth, setIsAuth] = useState(false);

	const authorize = useCallback(
		async (login: string, password: string): Promise<AuthResponse> => {
			const { user, error } = await request({ url: '/login', method: 'POST', data: { login, password } });

			if (error) return { error };

			dispatch(setAuth(user));

			setIsAuth(true);

			return { user };
		},
		[dispatch],
	);

	const registration = useCallback(
		async (login: string, password: string): Promise<AuthResponse> => {
			const { error } = await request({ url: '/register', method: 'POST', data: { login, password } });

			if (error) return { error };

			authorize(login, password);

			return { error };
		},
		[authorize],
	);

	const logout = useCallback(async () => {
		const { error } = await request({ url: '/logout', method: 'POST' });

		if (error) return;

		dispatch(resetAuth());

		setIsAuth(false);
	}, [dispatch]);

	const authCheck = useCallback(async () => {
		const { user, error } = await request({ url: '/me' });

		if (error) {
			logout();
			setIsAuthInitialize(true);
			return;
		}

		dispatch(setAuth(user));
		setIsAuthInitialize(true);
		setIsAuth(true);
	}, [dispatch, logout]);

	useLayoutEffect(() => {
		authCheck();
	}, [authCheck]);

	return (
		<AuthContext.Provider
			value={{
				authorize,
				registration,
				logout,
				isAuth,
			}}
		>
			{isAuthInitialize && children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);

	if (context === null) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
};
