import css from './operations-block.module.scss';
import { Block } from '../../shared/ui/components';
import { useState } from 'react';
import { Button } from '../../shared/ui/form-components';

export const OperationsBlock = ({ initialOperations, renderOperationsList }) => {
	const [operations, setOperations] = useState(initialOperations);
	return (
		<Block className={css['operations']}>
			{renderOperationsList(operations)}
			<Button>Загрузить ещё</Button>
		</Block>
	);
};
