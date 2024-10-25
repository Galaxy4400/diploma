import { AccountType } from '@/entities/account';
import { CategoryType } from '@/entities/category';
import { ID, Nullable } from '@/shared/types';

export interface OperationType {
	id: ID;
	user: ID;
	account: Pick<AccountType, 'name' | 'type'>;
	category: Pick<CategoryType, 'name' | 'icon' | 'type'>;
	name: string;
	amount: number;
	comment: string;
	status: boolean;
	createdAt: string;
}

export type OperationState = Nullable<OperationType>;
