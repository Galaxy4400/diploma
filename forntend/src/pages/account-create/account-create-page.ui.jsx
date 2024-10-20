import { useSelector } from 'react-redux';
import { selectAuthId } from '../../entities/auth';
import { AccountCreateForm } from '../../features/account';
import { Container } from '../../shared/ui/components';
import { PageHeader } from '../../widgets/page-header';

export const AccountCreatePage = () => {
	const authUserId = useSelector(selectAuthId);

	return (
		<Container>
			<PageHeader title="Создание счета" />
			<AccountCreateForm userId={authUserId} />
		</Container>
	);
};
