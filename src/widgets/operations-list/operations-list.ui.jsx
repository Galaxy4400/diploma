import css from './operations-list.module.scss';
import { Link } from 'react-router-dom';
import { OperationItem } from '../../entities/operation';
import { OperationDelete } from '../../features/operation';
import { path } from '../../shared/lib/router';
import { Block } from '../../shared/ui/components';

export const OperationsList = ({ operations, accountId }) => {
	return (
		<Block className={css['operations']}>
			<header className={css['header']}>
				<h4>Операции счета</h4>
				<Link to={path.operation.create()} state={{ from: { accountId } }}>
					Добавить операцию
				</Link>
			</header>
			<div>
				<ul>
					{operations?.map((operation) => (
						<OperationItem key={operation.id} operation={operation} deleteSlot={<OperationDelete operationId={operation.id} />} />
					))}
				</ul>
			</div>
		</Block>
	);
};
