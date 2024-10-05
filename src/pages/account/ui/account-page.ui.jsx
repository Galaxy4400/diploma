import { useLoaderData } from 'react-router-dom';
import { Account } from '../../../widgets/account';
import { AsyncComponent, Loading } from '../../../shared/ui/components';
import { Container, Grid } from '../../../shared/ui/technical';
import { PageHeader } from '../../../widgets/page-header';
import { OperationsList } from '../../../widgets/operations-list';
import { OperationsPagination } from '../../../features/operations/operations-pagination';

export const AccountPage = () => {
	const { account } = useLoaderData();

	return (
		<Container>
			<Grid gap={20}>
				<PageHeader title="Информация о счете" />
				<AsyncComponent resolve={account} element={<Account />} fallback={<Loading />} />
				<AsyncComponent resolve={account} fallback={<Loading />}>
					{(account) => (
						<OperationsPagination
							initialOperations={account.operations}
							renderOperationsList={(operations) => <OperationsList operations={operations} />}
						/>
					)}
				</AsyncComponent>
			</Grid>
		</Container>
	);
};
