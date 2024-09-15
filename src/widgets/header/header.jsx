import { useSelector } from "react-redux";
import { userSelector } from "../../app/store";
import { Link } from "react-router-dom";
import { useAuth } from "../../app/providers/auth-provider";

export const Header = () => {
	const { logout } = useAuth();

	const authUser = useSelector(userSelector.user);

	return (
		<div style={{display: "flex", justifyContent: "space-between", marginBottom: '30px'}}>
			<div>
				<Link to="/">ЛОГОТИП САЙТА</Link>
			</div>
			<div>
				Юзер: <Link to="/user-update">{authUser.login}</Link>
			</div>
			<div>
				<button onClick={() => logout()}>Выйти</button>
			</div>
		</div>
	)
};