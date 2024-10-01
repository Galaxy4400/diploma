import { useLoaderData } from 'react-router-dom';
import { Account } from '../../../widgets/account';
import { AsyncComponent, Loading } from '../../../shared/ui/components';
import { Container } from '../../../shared/ui/technical';
import { PageHeader } from '../../../widgets/page-header';
import { OperationsBlock } from '../../../widgets/operations-block';
import { OperationsList } from '../../../widgets/operations-list';

export const AccountPage = () => {
	const { account } = useLoaderData();

	return (
		<Container>
			<PageHeader title="Информация о счете" />
			<AsyncComponent resolve={account} element={<Account />} fallback={<Loading />} />
			<AsyncComponent resolve={account} fallback={<Loading />}>
				{(account) => (
					<OperationsBlock
						initialOperations={account.operations}
						renderOperationsList={(operations) => <OperationsList operations={operations} />}
					/>
				)}
			</AsyncComponent>
		</Container>
	);
};
