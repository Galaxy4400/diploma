import { EditUserForm } from '../../features/user';
import { Container } from '../../shared/ui/components';
import { PageHeader } from '../../widgets/page-header';
import { selectAuth } from '../../entities/auth';
import { useSelector } from 'react-redux';

export const UserEditPage = () => {
	const authUser = useSelector(selectAuth);

	return (
		<Container>
			<PageHeader title="Редактирование пользователя" />
			<EditUserForm userData={authUser} />
		</Container>
	);
};
