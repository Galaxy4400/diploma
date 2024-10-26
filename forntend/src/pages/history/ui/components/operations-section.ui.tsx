import css from './operations-section.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useAsyncValue } from 'react-router-dom';
import { Block } from 'shared/ui/components';
import { path } from 'shared/lib/router';
import { OperationsPagination } from 'features/operations';
import { OperationsList } from 'widgets/operations-list';
import { setOperations } from 'entities/operations';
import { OperationType } from 'entities/operation';

export const OperationsSection = () => {
	const operations = useAsyncValue() as OperationType[];
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setOperations(operations));
	}, [operations, dispatch]);

	return (
		<Block className={css['block']}>
			<header className={css['header']}>
				<h4>Список операций</h4>
				<Link className={css['link']} to={path.operation.create()}>
					Создать операцию
				</Link>
			</header>
			<OperationsList />
			<OperationsPagination accountId={null} />
		</Block>
	);
};
