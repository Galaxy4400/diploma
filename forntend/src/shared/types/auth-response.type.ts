import { UserType } from './user-type.type';

export interface AuthResponse {
	readonly error?: string | null;
	readonly user?: UserType | null;
}
