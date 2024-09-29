import css from './operations-block.module.scss';
import { useAsyncValue } from 'react-router-dom';
import { Block } from '../../shared/ui/components';
import { OperationDelete } from '../../features/operation';
import { OperationItem } from '../../entities/operation';

export const OperationsBlock = () => {
	const operations = useAsyncValue();

	return (
		<Block className={css['main']}>
			<h4 className={css['title']}>Недавние операции</h4>
			<div className={css['list']}>
				{operations?.map((operation) => (
					<OperationItem
						key={operation.id}
						operation={operation}
						deleteSlot={<OperationDelete operationId={operation.id} />}
					/>
				))}
			</div>
		</Block>
	);
};
