import css from './history-page.module.scss';
import { useLoaderData } from 'react-router-dom';
import { AsyncComponent, Loading } from '../../../shared/ui/components';
import { Container } from '../../../shared/ui/technical';
import { PageHeader } from '../../../widgets/page-header';
import { OperationsFilter } from '../../../features/operations';
import { OperationsSection } from './components';

export const HistoryPage = () => {
	const { operations } = useLoaderData();

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
