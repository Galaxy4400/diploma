import { OperationDelete } from 'features/operation';
import { OperationView, selectOperationData } from 'shared/constants';
import { useAppSelector } from 'shared/lib/store';

export const Operation = () => {
	const operation = useAppSelector(selectOperationData);

	return <OperationView operation={operation} deleteSlot={<OperationDelete operationId={operation.id} />} />;
};
