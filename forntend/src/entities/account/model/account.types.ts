import { ID, Nullable } from 'shared/types';

export interface AccountType {
	id: ID;
	type: ID;
	name: string;
	createdAt: string;
	amount: number;
	comment?: string;
}

export type AccountState = Nullable<AccountType>;
