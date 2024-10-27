import { useAsyncValue } from 'react-router-dom';
import { OperationView } from 'entities/operation';
import { OperationDelete } from 'features/operation';
import { OperationType } from 'shared/api/operation';

export const Operation = () => {
	const operation = useAsyncValue() as OperationType;

	return <OperationView operation={operation} deleteSlot={<OperationDelete operationId={operation.id} />} />;
};
