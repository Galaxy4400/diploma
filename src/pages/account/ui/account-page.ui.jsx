import css from './account-page.module.scss';
import { useLoaderData } from 'react-router-dom';
import { Account } from '../../../widgets/account';
import { AsyncComponent, Loading } from '../../../shared/ui/components';
import { Container } from '../../../shared/ui/technical';
import { PageHeader } from '../../../widgets/page-header';
import { OperationsSection } from './components';

export const AccountPage = () => {
	const { account } = useLoaderData();

	return (
		<Container className={css['container']}>
			<PageHeader title="Информация о счете" />
			<AsyncComponent resolve={account} element={<Account />} fallback={<Loading />} />
			<AsyncComponent resolve={account} element={<OperationsSection />} fallback={<Loading />} />
		</Container>
	);
};
