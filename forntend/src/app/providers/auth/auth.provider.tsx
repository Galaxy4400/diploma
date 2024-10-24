import { useDispatch } from 'react-redux';
import { AuthResponse } from './auth.types';
import { PropsWithChildren, useCallback, useLayoutEffect, useState } from 'react';
import { request } from '@/shared/api';
import { resetAuth, setAuth } from '@/entities/auth';
import { AuthContext } from './auth.context';

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const dispatch = useDispatch();
	const [isAuthInitialize, setIsAuthInitialize] = useState(false);
	const [isAuth, setIsAuth] = useState(false);

	const authorize = useCallback(
		async (login: string, password: string): Promise<AuthResponse> => {
			const { user, error } = await request<AuthResponse>({
				url: '/login',
				method: 'POST',
				data: { login, password },
			});

			if (error) return { error };

			dispatch(setAuth(user));

			setIsAuth(true);

			return { user };
		},
		[dispatch],
	);

	const registration = useCallback(
		async (login: string, password: string): Promise<AuthResponse> => {
			const { error } = await request<AuthResponse>({
				url: '/register',
				method: 'POST',
				data: { login, password },
			});

			if (error) return { error };

			authorize(login, password);

			return { error };
		},
		[authorize],
	);

	const logout = useCallback(async () => {
		const { error } = await request<AuthResponse>({ url: '/logout', method: 'POST' });

		if (error) return;

		dispatch(resetAuth());

		setIsAuth(false);
	}, [dispatch]);

	const authCheck = useCallback(async () => {
		const { user, error } = await request<AuthResponse>({ url: '/me' });

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
