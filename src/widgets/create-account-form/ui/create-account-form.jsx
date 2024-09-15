import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorList } from "../../../shared/ui";
import { useForm } from "react-hook-form";
import { createAccountFormRules } from "../lib";

export const CreateAccountForm = () => {
	const {
		register, handleSubmit, formState: { errors }
	} = useForm({ resolver: yupResolver(createAccountFormRules) });

	const onSubmit = async (data) => {
		console.log('create account:', data);
	};

	return (
		<div style={{width: "300px"}}>
			<form onSubmit={handleSubmit(onSubmit)} style={{display: "grid", gap: "10px"}}>
				<input {...register('login')} type="text" placeholder='Логин...' />
				<input {...register('password')} type="password" placeholder='Пароль...' />
				<input {...register('passcheck')} type="password" placeholder='Проверка паролья...' />
				<button type='submit'>Зарегистрироваться</button>
			</form>
			<ErrorList formErrors={errors} />
		</div>
	);
};