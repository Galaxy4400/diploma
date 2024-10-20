import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOperations, selectOperations } from '../../../../entities/operations';
import { selectFilter, useResetFilter } from '../../../../entities/application';
import { OPERATIONS_PER_LOAD } from '../../../../entities/operation';
import { request } from '../../../../shared/api';

export const useOperationsPagination = (accountId = null) => {
	const dispatch = useDispatch();
	const operations = useSelector(selectOperations);
	const filterParams = useSelector(selectFilter);
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadedAll, setIsLoadedAll] = useState(false);

	useResetFilter();

	useEffect(() => {
		setIsLoadedAll(false);
	}, [filterParams]);

	const loadHandler = async () => {
		setIsLoading(true);

		const { pagingData } = await request({
			url: `/operations${accountId ? `/account/${accountId}` : ''}`,
			query: {
				limit: OPERATIONS_PER_LOAD,
				page: Math.ceil(operations.length / OPERATIONS_PER_LOAD) + 1,
			},
		});

		// const { data: newOperations } = await server.getOperations({
		// 	...filterParams,
		// 	...(accountId ? { accountId } : {}),
		// 	limit: OPERATIONS_PER_LOAD,
		// 	start: operations.length,
		// });

		dispatch(addOperations(pagingData.items));

		if (pagingData.page >= pagingData.totalPages) setIsLoadedAll(true);

		setIsLoading(false);
	};

	return { operations, loadHandler, isLoading, isLoadedAll };
};
