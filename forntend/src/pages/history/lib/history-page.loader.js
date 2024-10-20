import { defer } from 'react-router-dom';
import { OPERATIONS_PER_LOAD } from '../../../entities/operation';
import { request } from '../../../shared/api';

const getOperations = async () => {
	const { pagingData } = await request({ url: '/operations', query: { limit: OPERATIONS_PER_LOAD } });

	return pagingData.items;
};

export const historyPageLoader = async () => {
	return defer({
		operations: getOperations(),
	});
};
