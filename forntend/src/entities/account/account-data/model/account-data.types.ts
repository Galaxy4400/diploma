import { AccountType } from 'shared/api/account';

export interface AccountDataState {
	account: AccountType;
	loading: boolean;
	error: string | null;
}
