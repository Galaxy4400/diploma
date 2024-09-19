import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerFormRules } from "./register.rules";
import { useAuth } from "../../../app/providers/auth";
import { ErrorList } from "../../../shared/ui";


export const RegisterForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm({ 
		resolver: yupResolver(registerFormRules)
	});

	const { registration, registrationError } = useAuth();

	const submitHandler = async ({ login, password }) => {
		registration(login, password);
	};

	return (
		<div style={{width: "300px"}}>
			<form onSubmit={handleSubmit(submitHandler)} style={{display: "grid", gap: "10px"}}>
				<input {...register('login')} type="text" placeholder='Логин...' />
				<input {...register('password')} type="password" placeholder='Пароль...' />
				<input {...register('passcheck')} type="password" placeholder='Проверка паролья...' />
				<button type='submit'>Зарегистрироваться</button>
			</form>
			<ErrorList formErrors={errors} />
			{registrationError && <div>{registrationError}</div>}
		</div>
	)
};