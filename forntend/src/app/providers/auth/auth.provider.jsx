import { useDispatch } from 'react-redux';
import { AuthContext } from './auth.context';
import { useCallback, useLayoutEffect, useState } from 'react';
import { resetAuth, setAuth } from '../../../entities/auth';
import { request } from '../../../shared/api';

export const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();
	const [isAuthInitialize, setIsAuthInitialize] = useState(false);

	const authorize = useCallback(
		async (login, password) => {
			const { user, error } = await request({ url: '/login', method: 'POST', data: { login, password } });

			if (error) return;

			dispatch(setAuth(user));
		},
		[dispatch],
	);

	const registration = useCallback(
		async (login, password) => {
			const { error } = await request({ url: '/register', method: 'POST', data: { login, password } });

			if (error) return;

			authorize(login, password);
		},
		[authorize],
	);

	const logout = useCallback(async () => {
		const { error } = await request({ url: '/logout', method: 'POST' });

		if (error) return;

		dispatch(resetAuth());
	}, [dispatch]);

	useLayoutEffect(() => {
		const loginCheck = async () => {
			const { user, error } = await request({ url: '/me' });

			if (error) {
				logout();
				setIsAuthInitialize(true);
				return;
			}

			dispatch(setAuth(user));
			setIsAuthInitialize(true);
		};

		loginCheck();
	}, [dispatch, logout]);

	return (
		<AuthContext.Provider
			value={{
				authorize,
				registration,
				logout,
			}}
		>
			{isAuthInitialize && children}
		</AuthContext.Provider>
	);
};
