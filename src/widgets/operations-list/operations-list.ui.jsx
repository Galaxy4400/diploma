import css from './operations-list.module.scss';
import { OperationItem } from '../../entities/operation';
import { OperationDelete } from '../../features/operation';

export const OperationsList = ({ operations }) => {
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
