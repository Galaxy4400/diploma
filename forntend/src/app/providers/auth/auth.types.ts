export interface AuthResponseType {
	error?: string | null;
	user?: object | null;
}

export interface AuthContextType {
	authorize: (login: string, password: string) => Promise<AuthResponseType>;
	registration: (login: string, password: string) => Promise<AuthResponseType>;
	logout: () => void;
	isAuth: boolean;
}
