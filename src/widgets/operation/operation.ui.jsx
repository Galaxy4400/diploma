import css from './operation.module.scss';
import { useAsyncValue } from 'react-router-dom';
import { OperationView } from '../../entities/operation';
import { OperationDelete } from '../../features/operation';

export const Operation = () => {
	const operation = useAsyncValue();

	return (
		<OperationView
			operation={operation}
			deleteSlot={<OperationDelete operationId={operation.id} />}
		/>
	);
};
