import { Operation } from 'widgets/operation';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';

export const OperationPage = () => {
	return (
		<Container>
			<PageHeader title="Информация об операции" />
			<Operation />
		</Container>
	);
};
