import css from './history-page.module.scss';
import { useLoaderData } from 'react-router-dom';
import { AsyncComponent, Block, Loading } from '../../../shared/ui/components';
import { OperationsList } from '../../../widgets/operations-list';
import { Container } from '../../../shared/ui/technical';
import { PageHeader } from '../../../widgets/page-header';
import { useEffect, useState } from 'react';

export const HistoryPage = () => {
	const { operations: initialOperations } = useLoaderData();

	const [operations, setOperations] = useState(initialOperations);

	useEffect(() => {
		setOperations(initialOperations);
	}, [initialOperations]);

	return (
		<Container>
			<PageHeader title="История операций" />
			<AsyncComponent resolve={operations} fallback={<Loading />}>
				{(operations) => (
					<>
						<Block className={css['operations']}>
							<OperationsList operations={operations} />
						</Block>
					</>
				)}
			</AsyncComponent>
		</Container>
	);
};
