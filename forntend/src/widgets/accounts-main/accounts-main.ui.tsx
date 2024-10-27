import css from './accounts-main.module.scss';
import { AccountDelete } from 'features/account';
import { Block } from 'shared/ui/components';
import { AccountItem } from 'entities/account/account-view';
import { selectAccountList } from 'entities/account/account-list';
import { useAppSelector } from 'shared/lib/store';

export const AccountsMain = () => {
	const accounts = useAppSelector(selectAccountList);

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
