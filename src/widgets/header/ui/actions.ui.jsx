// import css from "./header.scss";
import { Link } from "react-router-dom";
import { LogoutButton } from "../../../features/session";
import { path } from "../../../shared/lib/router";
import { useAuth } from "../../../app/providers/auth";


export const Actions = () => {
	const { authUser } = useAuth();

	return (
		<div className="actions">
			Юзер: <Link to={path.settings()}>{authUser.login}</Link>
			<LogoutButton />
		</div>
	)
};