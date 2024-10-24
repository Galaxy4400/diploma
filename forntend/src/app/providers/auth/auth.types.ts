/* eslint-disable no-unused-vars */
import { AuthResponse } from '@/entities/auth';

export interface AuthContextType {
	authorize: (login: string, password: string) => Promise<AuthResponse>;
	registration: (login: string, password: string) => Promise<AuthResponse>;
	logout: () => void;
	isAuth: boolean;
}
