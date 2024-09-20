import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../app/providers/auth";
import { loginFormRules } from "./login.rules";
import { Form, Input, Password } from "../../../shared/ui/react-hook-form";


export const LoginForm = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const { authorize, authorizeError } = useAuth();

	const submitHandler = async ({ login, password }) => {
		await authorize(login, password);

		navigate(location.state?.from?.pathname);
	};

	return (
		<div style={{ width: "300px" }}>
			<Form onSubmit={submitHandler} resolver={yupResolver(loginFormRules)} style={{ display: "grid", gap: "10px" }} >
				<Input name="login" placeholder='Логин...' />
				<Password name="password" placeholder='Пароль...' />
				<button type='submit'>Войти</button>
			</Form>
			{authorizeError && <div>{authorizeError}</div>}
		</div>
	)
};