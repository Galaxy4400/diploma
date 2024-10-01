import css from './account.module.scss';
import { Link, useAsyncValue } from 'react-router-dom';
import { AccountView } from '../../entities/account';
import { AccountDelete } from '../../features/account';
import { Block } from '../../shared/ui/components';
import { path } from '../../shared/lib/router';

export const Account = () => {
	const account = useAsyncValue();

	return <AccountView account={account} deleteSlot={<AccountDelete accountId={account.id} />} />;
};
