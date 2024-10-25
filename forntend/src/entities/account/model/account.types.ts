import { ID, Nullable } from '@/shared/types';

// export interface AuthData {
// 	login: string;
// 	password: string;
// }

export interface AccountType {
	id: ID;
	typeId: ID;
	name: string;
	createdAt: string;
	amount: number;
}

// export interface AuthResponse {
// 	readonly error?: string | null;
// 	readonly user?: UserType | null;
// }

export type AccountState = Nullable<AccountType>;
