import { PropsWithChildren, useCallback, useLayoutEffect, useState } from 'react';
import { request } from 'shared/api';
import { AuthResponse, UserType } from 'entities/auth';
import { AuthContext } from './auth.context';

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [isAuthInitialize, setIsAuthInitialize] = useState(false);
	const [authUser, setAuthUser] = useState<UserType | null>(null);

	const authorize = useCallback(async (login: string, password: string): Promise<AuthResponse> => {
		const { user, error } = await request<AuthResponse>({
			url: '/login',
			method: 'POST',
			data: { login, password },
		});

		if (!user) return { error };

		setAuthUser(user);

		return { user };
	}, []);

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
		await request<AuthResponse>({ url: '/logout', method: 'POST' });

		setAuthUser(null);
	}, []);

	const authCheck = useCallback(async () => {
		const { user } = await request<AuthResponse>({ url: '/me' });

		if (!user) {
			logout();
			setIsAuthInitialize(true);
			return;
		}

		setIsAuthInitialize(true);
		setAuthUser(user);
	}, [logout]);

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
