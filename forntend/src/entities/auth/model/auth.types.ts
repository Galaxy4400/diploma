import { Nullable } from '@/shared/types';

export interface UserType {
	id: string | number;
	login: string;
	email?: string;
	name?: string;
	surname?: string;
	address?: string;
}

export type AuthState = Nullable<UserType>;
