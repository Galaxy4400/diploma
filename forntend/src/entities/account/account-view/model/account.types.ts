import { AccountType } from 'shared/api/account';

export interface AccountState {
	account: AccountType;
	loading: boolean;
	error: string | null;
}
