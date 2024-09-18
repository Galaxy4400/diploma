import { useSelector } from "react-redux";
import { selectAuth } from "../../entities/auth";
import { EditUserForm } from "../../features/user";

export const UserEditPage = () => {
	const authUser = useSelector(selectAuth);

	return (
		<div>
			<h1>СТРАНИЦА РЕДАКТИРОВАНИЯ ПОЛЬЗОВАТЕЛЯ</h1>
			<EditUserForm userData={authUser} />
		</div>
	)
};