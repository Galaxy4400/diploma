import { AccountDelete } from 'features/account';
import { AccountView, selectAccountView } from 'entities/account/account-view';
import { useAppSelector } from 'shared/lib/store';

export const Account = () => {
	const account = useAppSelector(selectAccountView);

	return <AccountView account={account} deleteSlot={<AccountDelete accountId={account.id} />} />;
};
