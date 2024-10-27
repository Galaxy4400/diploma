import { PropsWithChildren, useCallback, useLayoutEffect, useState } from 'react';
import { request } from 'shared/api/request';
import { AuthContext } from './auth.context';
import { UserResponse, UserType } from 'shared/api/user';

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [isAuthInitialize, setIsAuthInitialize] = useState(false);
	const [authUser, setAuthUser] = useState<UserType | null>(null);

	const authorize = useCallback(async (login: string, password: string): Promise<UserResponse> => {
		const { user, error } = await request<UserResponse>({
			url: '/login',
			method: 'POST',
			data: { login, password },
		});

		if (!user) return { error };

		setAuthUser(user);

		return { user };
	}, []);

	const registration = useCallback(
		async (login: string, password: string): Promise<UserResponse> => {
			const { error } = await request<UserResponse>({
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
		await request<UserResponse>({ url: '/logout', method: 'POST' });

		setAuthUser(null);
	}, []);

	const authCheck = useCallback(async () => {
		const { user } = await request<UserResponse>({ url: '/me' });

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
				authCheck,
				authUser,
			}}
		>
			{isAuthInitialize && children}
		</AuthContext.Provider>
	);
};
