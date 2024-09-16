import { Link } from "react-router-dom";
import { LoginForm } from "../../features/session";
import { pathKey } from "../../shared/lib/router";


export const LoginPage = () => {
	return (
		<div style={{display: 'grid', justifyItems: 'center'}}>
			<h1>СТРАНИЦА АВТОРИЗАЦИИ</h1>
			<LoginForm />
			<Link to={pathKey.register()}>Регистрация</Link>
		</div>
	)
};