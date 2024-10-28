import css from './account-page.module.scss';
import { Account } from 'widgets/account';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { OperationsSection } from 'widgets/operations';

export const AccountPage = () => {
	return (
		<Container>
			<PageHeader title="Информация о счете" />
			<div className={css['main']}>
				<Account operationSectionSlot={<OperationsSection />} />
			</div>
		</Container>
	);
};
