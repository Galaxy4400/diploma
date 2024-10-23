import { useDispatch } from 'react-redux';
import { AuthContext } from './auth.context';
import { useCallback, useLayoutEffect, useState } from 'react';
import { resetAuth, setAuth } from '../../../entities/auth';
import { request } from '../../../shared/api';
import { WithChildren } from '@/shared/types';
import { AuthResponse } from './auth.types';

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
