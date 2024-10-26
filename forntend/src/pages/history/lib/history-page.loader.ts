import { defer } from 'react-router-dom';
import { OPERATIONS_PER_LOAD, OperationsResponse } from 'entities/operation';
import { request } from 'shared/api';

const getOperations = async () => {
	const { pagingData } = await request<OperationsResponse>({
		url: '/operations',
		query: { limit: OPERATIONS_PER_LOAD },
	});

	if (!pagingData) {
		throw new Error('Error loading data: pagingData information not found.');
	}

	return pagingData.items;
};

export const historyPageLoader = async () => {
	return defer({
		operations: getOperations(),
	});
};
