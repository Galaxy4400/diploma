/* eslint-disable no-unused-vars */

export interface AuthResponse {
	readonly error?: string | null;
	readonly user?: object | null;
}

export interface AuthContextType {
	authorize: (login: string, password: string) => Promise<AuthResponse>;
	registration: (login: string, password: string) => Promise<AuthResponse>;
	logout: () => void;
	isAuth: boolean;
}
