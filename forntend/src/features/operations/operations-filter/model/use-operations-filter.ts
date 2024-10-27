import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { OPERATIONS_PER_LOAD, OperationsResponse } from 'entities/operation';
import { setFilter } from 'entities/application';
import { setOperations } from 'entities/operations';
import { request, RequestData } from 'shared/api';

export const useOperationsFilter = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const filterHandler = async (filterParams: RequestData) => {
		setIsLoading(true);

		const { pagingData } = await request<OperationsResponse>({
			url: '/operations',
			query: { ...filterParams, limit: OPERATIONS_PER_LOAD },
		});

		if (!pagingData) {
			throw new Error('Error loading data: pagingData information not found.');
		}

		dispatch(setFilter(filterParams));
		dispatch(setOperations(pagingData.items));

		setIsLoading(false);
	};

	return { filterHandler, isLoading };
};
