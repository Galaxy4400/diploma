import { EditUserForm } from '../../features/user';
import { useAuth } from '../../app/providers/auth';
import { Container } from '../../shared/ui/components';
import { PageHeader } from '../../widgets/page-header';

export const UserEditPage = () => {
	const { authUser } = useAuth();

	return (
		<Container>
			<PageHeader title="Редактирование пользователя" />
			<EditUserForm userData={authUser} />
		</Container>
	);
};
