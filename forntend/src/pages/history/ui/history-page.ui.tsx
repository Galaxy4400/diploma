import css from './history-page.module.scss';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { OperationsSection } from 'widgets/operations';
import { OperationsFilter } from 'features/operation';

export const HistoryPage = () => {
	return (
		<Container>
			<PageHeader title="История операций" />
			<div className={css['main']}>
				<OperationsFilter />
				<OperationsSection history={true} />
			</div>
		</Container>
	);
};
