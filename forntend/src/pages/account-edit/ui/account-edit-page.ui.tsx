import { useLoaderData } from 'react-router-dom';
import { AccountEditForm } from 'features/account';
import { AsyncComponent, Loading } from 'shared/ui/components';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { ID } from 'shared/types';
import { AccountType } from 'entities/account';

interface AccountEditPageLoaderData {
	id: ID;
	account: Promise<AccountType>;
}

export const AccountEditPage = () => {
	const { account } = useLoaderData() as AccountEditPageLoaderData;

	return (
		<Container>
			<PageHeader title="Редактирование счета" />
			<AsyncComponent resolve={account} element={<AccountEditForm />} fallback={<Loading />} />
		</Container>
	);
};
