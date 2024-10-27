import { OperationType } from 'entities/operation';
import { ID } from 'shared/types';

export interface AccountType {
	id: ID;
	type: ID;
	name: string;
	createdAt: string;
	amount: number;
	comment?: string;
	operations?: OperationType[];
}

export interface AccountResponse {
	readonly error: string | null;
	readonly account: AccountType | null;
}

export interface AccountsResponse {
	readonly error: string | null;
	readonly accounts: AccountType[] | null;
}
