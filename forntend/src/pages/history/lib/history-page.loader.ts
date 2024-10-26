import { defer } from 'react-router-dom';
import { OPERATIONS_PER_LOAD, OperationsResponse } from 'entities/operation';
import { request } from 'shared/api';

const getOperations = async () => {
	const { pagingData, error } = await request<OperationsResponse>({
		url: '/operations',
		query: { limit: OPERATIONS_PER_LOAD },
	});

	if (!pagingData) {
		throw new Error(error || 'Unknown error');
	}

	return pagingData.items;
};

export const historyPageLoader = async () => {
	return defer({
		operations: getOperations(),
	});
};
