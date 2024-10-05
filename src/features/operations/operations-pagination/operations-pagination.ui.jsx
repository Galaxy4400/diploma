import css from './operations-pagination.module.scss';
import { Block } from '../../../shared/ui/components';
import { Button } from '../../../shared/ui/form-components';
import { useState } from 'react';
import { server } from '../../../shared/bff';
import { OPERATIONS_PER_LOAD } from '../../../entities/operation';

export const OperationsPagination = ({ accountId = null, initialOperations = [], renderOperationsList }) => {
	const [operations, setOperations] = useState(initialOperations);

	const loadHandler = async () => {
		const { data: newOperations } = await server.getOperations(
			accountId,
			OPERATIONS_PER_LOAD,
			operations.length,
		);

		setOperations([...operations, ...newOperations]);
	};

	return (
		<Block className={css['block']}>
			{renderOperationsList(operations)}
			<Button onClick={() => loadHandler()}>Загрузить ещё</Button>
		</Block>
	);
};
