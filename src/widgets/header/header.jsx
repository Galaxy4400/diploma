import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAuth } from "../../entities/auth";
import { LogoutButton } from "../../features/session";


export const Header = () => {
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
				<LogoutButton />
			</div>
		</div>
	)
};