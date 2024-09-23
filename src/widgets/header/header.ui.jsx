// import css from "./header.scss";
import { Link } from "react-router-dom";
import { LogoutButton } from "../../features/session";
import { path } from "../../shared/lib/router";
import { useAuth } from "../../app/providers/auth";
import { Container } from "../../shared/ui/technical";
import { Logo } from "../../shared/ui/components";


export const Header = () => {
	const { authUser } = useAuth();

	return (
		<header className="header">
			<Container>
				<div className="body">
					<div className="header__column header__column_1">
						<Logo />
					</div>
					<div className="header__column header__column_2">
						<Link to={path.history()}>История</Link>
					</div>
					<div className="header__column header__column_3">
						Юзер: <Link to={path.settings()}>{authUser.login}</Link>
					</div>
					<div>
						<LogoutButton />
					</div>

				</div>
			</Container>
		</header>
	)
};