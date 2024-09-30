import { useLoaderData } from 'react-router-dom';
import { AsyncComponent, Loading } from '../../../shared/ui/components';
import { Operation } from '../../../widgets/operation';
import { Container } from '../../../shared/ui/technical';
import { PageHeader } from '../../../widgets/page-header';

export const OperationPage = () => {
	const { operation } = useLoaderData();

	return (
		<Container>
			<PageHeader title="Информация об операции" />
			<AsyncComponent resolve={operation} element={<Operation />} fallback={<Loading />} />
		</Container>
	);
};
