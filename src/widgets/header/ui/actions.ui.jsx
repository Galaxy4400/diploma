import css from "./actions.module.scss";
import { Link } from "react-router-dom";
import { LogoutButton } from "../../../features/session";
import { path } from "../../../shared/lib/router";
import { useAuth } from "../../../app/providers/auth";


export const Actions = () => {
	const { authUser } = useAuth();

	return (
		<div className={css['actions']}>
			<Link className={css['user']} to={path.settings()}>
				<img className={css['avatar']} src="https://ui-avatars.com/api/?name=J&background=9b5de5&color=ffffff" alt="avatar" />
				<span className={css['login']}>{authUser.login}</span>
			</Link>
			<LogoutButton />
		</div>
	)
};