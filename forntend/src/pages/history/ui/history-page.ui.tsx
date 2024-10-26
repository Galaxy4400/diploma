import css from './history-page.module.scss';
import { useLoaderData } from 'react-router-dom';
import { AsyncComponent, Loading } from 'shared/ui/components';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { OperationsFilter } from 'features/operations';
import { OperationsSection } from './components';
import { OperationType } from 'entities/operation';

interface HistoryPageLoaderData {
	operations: Promise<OperationType[]>;
}

export const HistoryPage = () => {
	const { operations } = useLoaderData() as HistoryPageLoaderData;

	return (
		<Container>
			<PageHeader title="История операций" />
			<div className={css['main']}>
				<OperationsFilter />
				<AsyncComponent resolve={operations} element={<OperationsSection />} fallback={<Loading />} />
			</div>
		</Container>
	);
};