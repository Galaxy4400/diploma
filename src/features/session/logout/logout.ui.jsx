import { useAuth } from "../../../app/providers/auth";

export const LogoutButton = () => {
	const { logout } = useAuth();
	
	return (
		<button onClick={() => logout()}>Выйти</button>
	)
};