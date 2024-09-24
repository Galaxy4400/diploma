import css from './accounts-block.module.scss';
import { useAsyncValue } from "react-router-dom";
import { AccountItem } from "../../entities/account";
import { AccountDelete } from "../../features/account";
import { Block } from "../../shared/ui/components";


export const AccountsBlock = () => {
	const accounts = useAsyncValue();

	return (
		<Block className={css['main']}>
			<h4 className={css['title']}>Список счетов</h4>
			<div className={css['list']}>
				{accounts?.map(account => (
					<AccountItem 
						key={account.id} 
						accountData={account}
						deleteSlot={<AccountDelete accountId={account.id}/>}
					/>
				))}
			</div>
		</Block>
	)
};