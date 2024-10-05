import css from './history-page.module.scss';
import { useLoaderData } from 'react-router-dom';
import { AsyncComponent, Block, Loading } from '../../../shared/ui/components';
import { OperationsList } from '../../../widgets/operations-list';
import { Container } from '../../../shared/ui/technical';
import { PageHeader } from '../../../widgets/page-header';
import { OperationsFilter, OperationsPagination } from '../../../features/operations';

export const HistoryPage = () => {
	const { operations } = useLoaderData();

	return (
		<Container>
			<PageHeader title="История операций" />
			<div className={css['main']}>
				<OperationsFilter />
				<AsyncComponent resolve={operations} fallback={<Loading />}>
					{(operations) => (
						<Block className={css['block']}>
							<OperationsPagination
								initialOperations={operations}
								renderOperationsList={(operations) => <OperationsList operations={operations} />}
							/>
						</Block>
					)}
				</AsyncComponent>
			</div>
		</Container>
	);
};
