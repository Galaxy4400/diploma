import { AccountDelete } from 'features/account';
import { AccountView, selectAccount } from 'entities/account/account-view';
import { useAppSelector } from 'shared/lib/store';

export const Account = () => {
	const account = useAppSelector(selectAccount);

	return <AccountView account={account} deleteSlot={<AccountDelete accountId={account.id} />} />;
};
