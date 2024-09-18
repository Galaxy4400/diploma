import { EditUserForm } from "../../features/user";
import { useAuth } from "../../app/providers/auth";

export const UserEditPage = () => {
	const { authUser } = useAuth();

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ ПОЛЬЗОВАТЕЛЯ</h1>
			<EditUserForm userData={authUser} />
		</div>
	)
};