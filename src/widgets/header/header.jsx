import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth } from "../../app/providers/auth";
import { selectAuth } from "../../entities";

export const Header = () => {
	const { logout } = useAuth();

	const authUser = useSelector(selectAuth);

	return (
		<div style={{display: "flex", justifyContent: "space-between", marginBottom: '30px'}}>
			<div>
				<Link to="/">ЛОГОТИП САЙТА</Link>
			</div>
			<div>
				Юзер: <Link to="/user/edit">{authUser.login}</Link>
			</div>
			<div>
				<button onClick={() => logout()}>Выйти</button>
			</div>
		</div>
	)
};