import { UserResponse } from './user.types';
import { request } from '../request';

export const signIn = (login: string, password: string): Promise<UserResponse> =>
	request({
		url: 'login',
		method: 'POST',
		data: { login, password },
	});

export const signUp = (login: string, password: string): Promise<UserResponse> =>
	request({
		url: '/register',
		method: 'POST',
		data: { login, password },
	});

export const signOut = (): Promise<UserResponse> => request({ url: '/logout', method: 'POST' });

export const signCheck = (): Promise<UserResponse> => request({ url: '/me' });
