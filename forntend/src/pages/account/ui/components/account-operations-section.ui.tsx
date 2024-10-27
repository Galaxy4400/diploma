import css from './account-operations-section.module.scss';
import { Link } from 'react-router-dom';
import { Block } from 'shared/ui/components';
import { path } from 'shared/lib/router';
import { OperationsPagination } from 'features/operations';
import { OperationsList } from 'widgets/operations-list';
import { selectAccountData } from 'entities/account/account-data';
import { useAppSelector } from 'shared/lib/store';

export const AccountOperationsSection = () => {
	const account = useAppSelector(selectAccountData);

	return (
		<Block className={css['block']}>
			<header className={css['header']}>
				<h4>Список операций</h4>
				<Link
					className={css['link']}
					to={path.operation.create()}
					state={{ from: { accountId: account.id } }}
				>
					Создать операцию
				</Link>
			</header>
			<OperationsList />
			<OperationsPagination accountId={account.id} />
		</Block>
	);
};
