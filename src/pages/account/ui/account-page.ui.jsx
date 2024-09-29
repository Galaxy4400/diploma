import { useLoaderData } from 'react-router-dom';
import { Account } from '../../../widgets/account';
import { AsyncComponent, Loading } from '../../../shared/ui/components';
import { Container } from '../../../shared/ui/technical';
import { PageHeader } from '../../../widgets/page-header';

export const AccountPage = () => {
	const { account } = useLoaderData();

	return (
		<Container>
			<PageHeader title="Информация о счете" />
			<AsyncComponent resolve={account} element={<Account />} fallback={<Loading />} />
		</Container>
	);
};
