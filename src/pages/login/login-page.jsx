import { Link } from "react-router-dom";
import { LoginForm } from "../../widgets/login-form";

export const LoginPage = () => {
	return (
		<div>
			<h1>СТРАНИЦА АВТОРИЗАЦИИ</h1>
			<LoginForm />
			<Link to="/register">Регистрация</Link>
		</div>
	)
};