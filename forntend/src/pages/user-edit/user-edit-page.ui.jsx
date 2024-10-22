import { EditUserForm } from '../../features/user';
import { Container, Grid } from '../../shared/ui/components';
import { PageHeader } from '../../widgets/page-header';
import { selectAuth } from '../../entities/auth';
import { useSelector } from 'react-redux';
import { UserDelete } from '../../features/user/user-delete/user-delete.ui';

export const UserEditPage = () => {
	const authUser = useSelector(selectAuth);

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
