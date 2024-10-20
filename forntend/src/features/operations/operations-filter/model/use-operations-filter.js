import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { OPERATIONS_PER_LOAD } from '../../../../entities/operation';
import { setFilter } from '../../../../entities/application';
import { setOperations } from '../../../../entities/operations';
import { request } from '../../../../shared/api';

export const useOperationsFilter = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const filterHandler = async (filterParams) => {
		setIsLoading(true);

		const { pagingData } = await request({
			url: '/operations',
			query: { ...filterParams, limit: OPERATIONS_PER_LOAD },
		});

		dispatch(setFilter(filterParams));
		dispatch(setOperations(pagingData.items));

		setIsLoading(false);
	};

	return { filterHandler, isLoading };
};
