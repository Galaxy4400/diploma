export interface AuthResponse {
	error?: string | null;
	user?: object | null;
}

export interface AuthContextType {
	authorize: (login: string, password: string) => Promise<AuthResponse>;
	registration: (login: string, password: string) => Promise<AuthResponse>;
	logout: () => void;
	isAuth: boolean;
}
