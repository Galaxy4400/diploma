import { defer } from 'react-router-dom';
import { getOperation } from 'shared/api/operation';
import { HasParams, ID } from 'shared/types';

const processGetOperation = async (opeartionId: ID) => {
	const { operation, error } = await getOperation(opeartionId);

	if (!operation) {
		throw new Error(error || 'Unknown error');
	}

	return operation;
};

export const operationPageLoader = async ({ params }: HasParams<{ id: string }>) => {
	const id = params.id;

	if (!id) {
		throw new Error('Operation ID is missing in route parameters.');
	}

	return defer({
		id,
		operation: processGetOperation(id),
	});
};
