import css from './operations-pagination.module.scss';
import { useState } from 'react';
import { server } from '../../../shared/bff';
import { OPERATIONS_PER_LOAD } from '../../../entities/operation';
import { Button } from '../../../shared/ui/components';

export const OperationsPagination = ({ accountId = null, initialOperations = [], renderOperationsList }) => {
	const [operations, setOperations] = useState(initialOperations);
	const [isLoading, setIsLoading] = useState(false);
	const [isAll, setIsAll] = useState(false);

	const loadHandler = async () => {
		setIsLoading(true);

		const { data: newOperations } = await server.getOperations(
			accountId,
			OPERATIONS_PER_LOAD,
			operations.length,
		);

		setOperations([...operations, ...newOperations]);

		if (!newOperations.length) setIsAll(true);

		setIsLoading(false);
	};

	return (
		<div className={css['block']}>
			{renderOperationsList(operations)}
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
