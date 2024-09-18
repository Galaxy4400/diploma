import { Link } from "react-router-dom";
import { LogoutButton } from "../../features/session";
import { path } from "../../shared/lib/router";
import { useAuth } from "../../app/providers/auth";


export const Header = () => {
	const { authUser } = useAuth();

	return (
		<div style={{display: "flex", justifyContent: "space-between", marginBottom: '30px'}}>
			<div>
				<Link to={path.home()}>ЛОГОТИП САЙТА</Link>
			</div>
			<div>
				Юзер: <Link to={path.settings()}>{authUser.login}</Link>
			</div>
			<div>
				<LogoutButton />
			</div>
		</div>
	)
};