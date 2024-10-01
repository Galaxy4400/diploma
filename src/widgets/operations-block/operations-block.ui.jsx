import css from './operations-block.module.scss';
import { OperationItem } from '../../entities/operation';
import { OperationDelete } from '../../features/operation';
import { Block } from '../../shared/ui/components';
import { Link } from 'react-router-dom';
import { OperationsList } from '../operations-list';
import { useState } from 'react';
import { path } from '../../shared/lib/router';
import { Button } from '../../shared/ui/form-components';

export const OperationsBlock = ({ initialOperations, renderOperationsList }) => {
	const [operations, setOperations] = useState(initialOperations);
	return (
		<>
			{renderOperationsList(operations)}
			<Button>Загрузить ещё</Button>
		</>
	);
};
