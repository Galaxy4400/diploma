import { useAsyncValue } from 'react-router-dom';
import { AccountType, AccountView } from 'entities/account';
import { AccountDelete } from 'features/account';

export const Account = () => {
	const account = useAsyncValue() as AccountType;

	return <AccountView account={account} deleteSlot={<AccountDelete accountId={account.id} />} />;
};
