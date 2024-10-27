import { useLoaderData } from 'react-router-dom';
import { AsyncComponent, Loading } from 'shared/ui/components';
import { Operation } from 'widgets/operation';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { ID } from 'shared/types';
import { OperationType } from 'shared/api/operation';

interface OperationPageLoaderData {
	id: ID;
	operation: Promise<OperationType>;
}

export const OperationPage = () => {
	const { operation } = useLoaderData() as OperationPageLoaderData;

	return (
		<Container>
			<PageHeader title="Информация об операции" />
			<AsyncComponent resolve={operation} element={<Operation />} fallback={<Loading />} />
		</Container>
	);
};
