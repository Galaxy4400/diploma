import css from './operations-list.module.scss';
import { OperationDelete } from 'features/operation';
import { selectOperations } from 'entities/operations';
import { useSelector } from 'react-redux';
import { OperationItem } from 'shared/constants';

export const OperationsList = () => {
	const operations = useSelector(selectOperations);

	return (
		<div className={css['list']}>
			{operations.length ? (
				operations?.map((operation) => (
					<OperationItem
						key={operation.id}
						operation={operation}
						deleteSlot={<OperationDelete operationId={operation.id} />}
					/>
				))
			) : (
				<h5>Операций нет</h5>
			)}
		</div>
	);
};
