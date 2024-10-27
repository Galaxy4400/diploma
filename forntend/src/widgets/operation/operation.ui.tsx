import { OperationView, selectOperationData } from 'entities/operation/operation-data';
import { OperationDelete } from 'features/operation';
import { useAppSelector } from 'shared/lib/store';

export const Operation = () => {
	const operation = useAppSelector(selectOperationData);

	return <OperationView operation={operation} deleteSlot={<OperationDelete operationId={operation.id} />} />;
};
