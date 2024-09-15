import { useSelector } from "react-redux";
import { userSelector } from "../../app/store";
import { Link } from "react-router-dom";
import { useAuth } from "../../app/providers/auth-provider";
import { useServer } from "../../app/providers/server-provider";

export const Header = () => {
	const { logout } = useAuth();
	const { requestServer } = useServer();

	const onLogout = () => {
		requestServer.logout()
			.then(() => logout());
	};

	const authUser = useSelector(userSelector.user);

	return (
		<div style={{display: "flex", justifyContent: "space-between"}}>
			<div>
				<Link to="/">ЛОГОТИП САЙТА</Link>
			</div>
			<div>
				Юзер: <Link to="/settings">{authUser.login}</Link>
			</div>
			<div>
				<button onClick={() => onLogout()}>Выйти</button>
			</div>
		</div>
	)
};