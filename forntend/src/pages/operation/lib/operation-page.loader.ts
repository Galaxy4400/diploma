import { defer } from 'react-router-dom';
import { request } from 'shared/api';
import { HasParams, ID } from 'shared/types';
import { OperationResponse } from 'entities/operation';

const getOperation = async (opeartionId: ID) => {
	const { operation, error } = await request<OperationResponse>({ url: `/operations/${opeartionId}` });

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
		operation: getOperation(id),
	});
};
