import css from './operations-section.module.scss';
import { Link, useAsyncValue } from 'react-router-dom';
import { Block } from '../../../../shared/ui/components';
import { path } from '../../../../shared/lib/router';
import { OperationsPagination } from '../../../../features/operations/operations-pagination';
import { OperationsList } from '../../../../widgets/operations-list';

export const OperationsSection = () => {
	const account = useAsyncValue();

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
			<OperationsPagination
				accountId={account.id}
				initialOperations={account.operations}
				renderOperationsList={(operations) => <OperationsList operations={operations} />}
			/>
		</Block>
	);
};
