import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'entities/application';
import { setOperations } from 'entities/operations';
import { RequestData } from 'shared/api';
import { getOperations } from 'shared/api/operation';
import { OPERATIONS_PER_LOAD } from 'entities/operation/operation-data';

export const useOperationsFilter = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const filterHandler = async (filterParams: RequestData) => {
		setIsLoading(true);

		const { pagingData } = await getOperations({ ...filterParams, limit: OPERATIONS_PER_LOAD });

		if (!pagingData) {
			throw new Error('Error loading data: pagingData information not found.');
		}

		dispatch(setFilter(filterParams));
		dispatch(setOperations(pagingData.items));

		setIsLoading(false);
	};

	return { filterHandler, isLoading };
};
