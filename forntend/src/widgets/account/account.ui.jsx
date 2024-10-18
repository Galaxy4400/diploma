import { useAsyncValue } from 'react-router-dom';
import { AccountView } from '../../entities/account';
import { AccountDelete } from '../../features/account';

export const Account = () => {
	const account = useAsyncValue();

	return <AccountView account={account} deleteSlot={<AccountDelete accountId={account.id} />} />;
};
