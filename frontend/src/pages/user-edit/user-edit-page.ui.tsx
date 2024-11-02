import { EditUserForm } from 'features/user';
import { Container, Grid } from 'shared/ui/components';
import { PageHeader } from 'widgets/page-header';
import { UserDelete } from 'features/user/user-delete/user-delete.ui';
import { useAuth } from 'app/providers/auth';

export const UserEditPage = () => {
	const { authUser } = useAuth();

	if (!authUser) {
		throw new Error('You are not authenticated');
	}

	return (
		<Container>
			<PageHeader title="Редактирование пользователя" />
			<Grid gap={50}>
				<EditUserForm userData={authUser} />
				<UserDelete userId={authUser.id} />
			</Grid>
		</Container>
	);
};
