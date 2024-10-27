import { AccountDelete } from 'features/account';
import { AccountView, selectAccountData } from 'entities/account/account-data';
import { useAppSelector } from 'shared/lib/store';

export const Account = () => {
	const account = useAppSelector(selectAccountData);

	return <AccountView account={account} deleteSlot={<AccountDelete accountId={account.id} />} />;
};
