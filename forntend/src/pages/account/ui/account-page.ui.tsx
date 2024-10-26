import css from './account-page.module.scss';
import { useLoaderData } from 'react-router-dom';
import { Account } from 'widgets/account';
import { AsyncComponent, Loading } from 'shared/ui/components';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { OperationsSection } from './components';
import { AccountType } from 'entities/account';
import { ID } from 'shared/types';

interface AccountPageLoaderData {
	id: ID;
	account: Promise<AccountType>;
}

export const AccountPage = () => {
	const { account } = useLoaderData() as AccountPageLoaderData;

	return (
		<Container>
			<PageHeader title="Информация о счете" />
			<div className={css['main']}>
				<AsyncComponent resolve={account} element={<Account />} fallback={<Loading />} />
				<AsyncComponent resolve={account} element={<OperationsSection />} fallback={<Loading />} />
			</div>
		</Container>
	);
};
