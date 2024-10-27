import { useAsyncValue } from 'react-router-dom';
import { AccountDelete } from 'features/account';
import { AccountType } from 'shared/api/account';
import { AccountView } from 'entities/account/account-view';

export const Account = () => {
	const account = useAsyncValue() as AccountType;

	return <AccountView account={account} deleteSlot={<AccountDelete accountId={account.id} />} />;
};
