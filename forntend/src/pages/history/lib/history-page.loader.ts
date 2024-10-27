import { OPERATIONS_PER_LOAD } from 'shared/constants';
import { defer } from 'react-router-dom';
import { getOperations } from 'shared/api/operation';

const processGetOperations = async () => {
	const { pagingData, error } = await getOperations({ limit: OPERATIONS_PER_LOAD });

	if (!pagingData) {
		throw new Error(error || 'Unknown error');
	}

	return pagingData.items;
};

export const historyPageLoader = async () => {
	return defer({
		operations: processGetOperations(),
	});
};
