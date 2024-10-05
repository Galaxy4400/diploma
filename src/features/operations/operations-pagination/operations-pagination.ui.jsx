import css from './operations-pagination.module.scss';
import { useState } from 'react';
import { server } from '../../../shared/bff';
import { OPERATIONS_PER_LOAD } from '../../../entities/operation';
import { Button } from '../../../shared/ui/components';
import { addOperations, selectOperations } from '../../../entities/operations';
import { useDispatch, useSelector } from 'react-redux';

export const OperationsPagination = ({ accountId = null, operationsListSlot }) => {
	const operations = useSelector(selectOperations);
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [isAll, setIsAll] = useState(false);

	const loadHandler = async () => {
		setIsLoading(true);

		const { data: newOperations } = await server.getOperations({
			accountId,
			limit: OPERATIONS_PER_LOAD,
			start: operations.length,
		});

		dispatch(addOperations(newOperations));

		if (!newOperations.length) setIsAll(true);

		setIsLoading(false);
	};

	return (
		<div className={css['block']}>
			{operationsListSlot}
			{!isAll ? (
				<Button className={css['button']} onClick={loadHandler} disabled={isLoading}>
					Загрузить ещё
				</Button>
			) : (
				<h5>Загружены все операции</h5>
			)}
		</div>
	);
};
