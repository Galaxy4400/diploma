import { Link } from "react-router-dom";
import { RegisterForm } from "../../widgets/register-form";

export const RegisterPage = () => {
	return (
		<div style={{display: 'grid', justifyItems: 'center'}}>
			<h1>СТРАНИЦА РЕГИСТРАЦИИ</h1>
			<RegisterForm />
			<Link to="/login">Страница авторизации</Link>
		</div>
	)
};