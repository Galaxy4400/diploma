import { Link } from "react-router-dom";
import { LoginForm } from "../../features/session";
import { path } from "../../shared/lib/router";


export const LoginPage = () => {
	return (
		<div>
			<h1>СТРАНИЦА АВТОРИЗАЦИИ</h1>
			<LoginForm />
			<Link to={path.register()}>Регистрация</Link>
		</div>
	)
};