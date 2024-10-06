import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { server } from '../../../../shared/bff';
import { OPERATIONS_PER_LOAD } from '../../../../entities/operation';
import { setFilter } from '../../../../entities/application';
import { setOperations } from '../../../../entities/operations';

export const useOperationsFilter = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

	const filterHandler = async (filterParams) => {
		setIsLoading(true);
		console.log(filterParams);
		const { data: filteredOperations } = await server.getOperations({
			...filterParams,
			limit: OPERATIONS_PER_LOAD,
		});

		dispatch(setFilter(filterParams));
		dispatch(setOperations(filteredOperations));

		setIsLoading(false);
	};

	return { filterHandler, isLoading };
};
