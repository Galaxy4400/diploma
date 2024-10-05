import css from './operations-pagination.module.scss';
import { Block } from '../../../shared/ui/components';
import { Button } from '../../../shared/ui/form-components';
import { useState } from 'react';

export const OperationsPagination = ({ initialOperations, renderOperationsList }) => {
	const [operations, setOperations] = useState(initialOperations);
	return (
		<Block className={css['block']}>
			{renderOperationsList(operations)}
			<Button>Загрузить ещё</Button>
		</Block>
	);
};
