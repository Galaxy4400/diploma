import css from './operations-section.module.scss';
import { Link, useAsyncValue } from 'react-router-dom';
import { Block } from '../../../../shared/ui/components';
import { path } from '../../../../shared/lib/router';
import { OperationsPagination } from '../../../../features/operations';
import { OperationsList } from '../../../../widgets/operations-list';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setOperations } from '../../../../entities/operations';

export const OperationsSection = () => {
	const account = useAsyncValue();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setOperations(account.operations));
	}, [account, dispatch]);

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
