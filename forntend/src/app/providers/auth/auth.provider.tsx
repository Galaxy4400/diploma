import { useDispatch } from 'react-redux';
import { PropsWithChildren, useCallback, useLayoutEffect, useState } from 'react';
import { request } from 'shared/api';
import { AuthResponse, resetAuth, setAuth, UserType } from 'entities/auth';
import { AuthContext } from './auth.context';

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const dispatch = useDispatch();
	const [isAuthInitialize, setIsAuthInitialize] = useState(false);
	const [authUser, setAuthUser] = useState<UserType | null>(null);

	const authorize = useCallback(
		async (login: string, password: string): Promise<AuthResponse> => {
			const { user, error } = await request<AuthResponse>({
				url: '/login',
				method: 'POST',
				data: { login, password },
			});

			if (!user) return { error };

			dispatch(setAuth(user));

			setAuthUser(user);

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
		const { user } = await request<AuthResponse>({ url: '/logout', method: 'POST' });

		if (!user) return;

		dispatch(resetAuth());

		setAuthUser(user);
	}, [dispatch]);

	const authCheck = useCallback(async () => {
		const { user } = await request<AuthResponse>({ url: '/me' });

		if (!user) {
			logout();
			setIsAuthInitialize(true);
			return;
		}

		dispatch(setAuth(user));
		setIsAuthInitialize(true);
		setAuthUser(user);
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
				authUser,
			}}
		>
			{isAuthInitialize && children}
		</AuthContext.Provider>
	);
};
