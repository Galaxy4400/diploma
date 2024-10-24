/* eslint-disable no-unused-vars */
import { AuthResponse } from '@/shared/types';

export interface AuthContextType {
	authorize: (login: string, password: string) => Promise<AuthResponse>;
	registration: (login: string, password: string) => Promise<AuthResponse>;
	logout: () => void;
	isAuth: boolean;
}
