import { useAsyncValue } from 'react-router-dom';
import { AccountView } from 'entities/account';
import { AccountDelete } from 'features/account';
import { AccountType } from 'shared/api/account';

export const Account = () => {
	const account = useAsyncValue() as AccountType;

	return <AccountView account={account} deleteSlot={<AccountDelete accountId={account.id} />} />;
};
