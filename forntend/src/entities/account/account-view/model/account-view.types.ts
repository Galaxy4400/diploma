import { AccountType } from 'shared/api/account';

export interface AccountViewState {
	account: AccountType;
	loading: boolean;
	error: string | null;
}
