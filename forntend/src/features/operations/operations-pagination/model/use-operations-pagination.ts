import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOperations, selectOperations } from 'entities/operations';
import { selectFilter, useResetFilter } from 'entities/application';
import { OPERATIONS_PER_LOAD } from 'entities/operation';
import { ID } from 'shared/types';
import { getOperationsByAccount } from 'shared/api/operation';

export const useOperationsPagination = (accountId: ID | null) => {
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

		const { pagingData } = await getOperationsByAccount(accountId, {
			limit: OPERATIONS_PER_LOAD,
			page: Math.ceil(operations.length / OPERATIONS_PER_LOAD) + 1,
			...filterParams,
		});

		if (!pagingData) {
			throw new Error('Error loading data: pagingData information not found.');
		}

		dispatch(addOperations(pagingData.items));

		if (pagingData.page >= pagingData.totalPages) setIsLoadedAll(true);

		setIsLoading(false);
	};

	return { operations, loadHandler, isLoading, isLoadedAll };
};
