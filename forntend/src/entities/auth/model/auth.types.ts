import { ID, Nullable } from 'shared/types';

export interface UserType {
	id: ID;
	login: string;
	email?: string;
	name?: string;
	surname?: string;
	address?: string;
}

export interface AuthResponse {
	readonly error?: string | null;
	readonly user?: UserType | null;
}

export type AuthState = Nullable<UserType>;
