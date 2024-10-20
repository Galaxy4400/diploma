import { OperationCreateForm } from '../../features/operation';
import { Container } from '../../shared/ui/components';
import { PageHeader } from '../../widgets/page-header';

export const OperationCreatePage = () => {
	return (
		<Container>
			<PageHeader title="Создание операции" />
			<OperationCreateForm />
		</Container>
	);
};
