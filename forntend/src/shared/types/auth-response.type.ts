import { UserType } from '@/entities/auth';

export interface AuthResponse {
	readonly error?: string | null;
	readonly user?: UserType | null;
}
