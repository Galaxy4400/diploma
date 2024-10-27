import css from './accounts-main.module.scss';
import { useAsyncValue } from 'react-router-dom';
import { AccountDelete } from 'features/account';
import { Block } from 'shared/ui/components';
import { AccountType } from 'shared/api/account';
import { AccountItem } from 'entities/account/account-view';

export const AccountsMain = () => {
	const accounts = useAsyncValue() as AccountType[];

	return (
		<Block className={css['main']}>
			<h4 className={css['title']}>Список счетов</h4>
			<div className={css['list']}>
				{accounts?.map((account) => (
					<AccountItem
						key={account.id}
						account={account}
						deleteSlot={<AccountDelete accountId={account.id} />}
					/>
				))}
			</div>
		</Block>
	);
};
