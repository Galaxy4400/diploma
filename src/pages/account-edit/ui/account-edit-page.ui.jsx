import { useLoaderData } from 'react-router-dom';
import { AccountEditForm } from '../../../features/account';
import { AsyncComponent, Loading } from '../../../shared/ui/components';
import { Container } from '../../../shared/ui/technical';
import { PageHeader } from '../../../widgets/page-header';

export const AccountEditPage = () => {
	const { account } = useLoaderData();

	return (
		<Container>
			<PageHeader title="Редактирование счета" />
			<AsyncComponent resolve={account} element={<AccountEditForm />} fallback={<Loading />} />
		</Container>
	);
};
