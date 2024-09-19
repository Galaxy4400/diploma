import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../app/providers/auth";
import { ErrorList } from "../../../shared/ui";
import { loginFormRules } from "./login.rules";


export const LoginForm = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(loginFormRules)
	});

	const { authorize, authorizeError } = useAuth();

	const onSubmit = async ({ login, password }) => {
		await authorize(login, password);

		navigate(location.state?.from?.pathname);
	};

	return (
		<div style={{ width: "300px" }}>
			<form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: "10px" }}>
				<input {...register('login')} type="text" placeholder='Логин...' />
				<input {...register('password')} type="password" placeholder='Пароль...' />
				<button type='submit'>Войти</button>
			</form>
			<ErrorList formErrors={errors} />
			{authorizeError && <div>{authorizeError}</div>}
		</div>
	)
};