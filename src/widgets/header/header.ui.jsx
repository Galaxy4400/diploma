// import css from "./header.scss";
import { Link } from "react-router-dom";
import { LogoutButton } from "../../features/session";
import { path } from "../../shared/lib/router";
import { useAuth } from "../../app/providers/auth";
import { CategoryIcon } from "../../shared/ui/icons";
import { CATEGORY_ICON } from "../../shared/lib/icons";
import { Container } from "../../shared/ui/technical";


export const Header = () => {
	const { authUser } = useAuth();

	return (
		<header className="header">
			<Container>
				<div className="body">
					<div className="header__column header__column_1">
						<Link className="logo" to={path.home()}>
							<CategoryIcon name={CATEGORY_ICON.ICON4} />
							<div>Учет доходов и расходов</div>
						</Link>
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