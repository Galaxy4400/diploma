import { AccountEditForm } from 'features/account';
import { Container } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';

export const AccountEditPage = () => {
	return (
		<Container>
			<PageHeader title="Редактирование счета" />
			<AccountEditForm />
		</Container>
	);
};
