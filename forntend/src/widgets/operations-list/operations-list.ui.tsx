import css from './operations-list.module.scss';
import { OperationDelete } from 'features/operation';
import { OperationItem } from 'entities/operation/operation-data';
import { selectOperationList } from 'entities/operation/operation-list';
import { useAppSelector } from 'shared/lib/store';

export const OperationsList = () => {
	const operations = useAppSelector(selectOperationList);

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
