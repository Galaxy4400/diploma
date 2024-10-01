import css from './account.module.scss';
import { Link, useAsyncValue } from 'react-router-dom';
import { AccountView } from '../../entities/account';
import { AccountDelete } from '../../features/account';
import { Block } from '../../shared/ui/components';
import { path } from '../../shared/lib/router';

export const Account = () => {
	const account = useAsyncValue();

	return <AccountView account={account} deleteSlot={<AccountDelete accountId={account.id} />} />;
	// return (
	// 	<div className={css['block']}>
	// 		<AccountView account={account} deleteSlot={<AccountDelete accountId={account.id} />} />
	// 		<Block className={css['operations']}>
	// 			<header className={css['header']}>
	// 				<h4>Операции счета</h4>
	// 				<Link to={path.operation.create()} state={{ from: { accountId: account.id } }}>
	// 					Добавить операцию
	// 				</Link>
	// 			</header>
	// 			<OperationsBlock />
	// 		</Block>
	// 	</div>
	// );
};
