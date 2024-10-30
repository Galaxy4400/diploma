import { Container } from 'shared/ui/components';
import { Analytics } from 'widgets/analytics';
import { PageHeader } from 'widgets/page-header';

export const AnalyticsPage = () => {
	return (
		<Container>
			<PageHeader title="Аналитика" />
			<Analytics />
		</Container>
	);
};
