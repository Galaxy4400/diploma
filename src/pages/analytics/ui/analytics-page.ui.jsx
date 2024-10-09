import css from './analytics-page.module.scss';
import { Container } from '../../../shared/ui/components';
import { PageHeader } from '../../../widgets/page-header';

export const AnalyticsPage = () => {
	return (
		<Container>
			<PageHeader title="Аналитика" />
			<div className={css['main']}></div>
		</Container>
	);
};
