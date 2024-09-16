import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ErrorList } from "../../../shared/ui";
import { userEditFormRules } from "../lib";
import { useDispatch, useSelector } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { selectAuthUser, updateAuthUser } from "../../../entities/auth-user";

export const UserForm = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();

	const authUser = useSelector(selectAuthUser);
	
	const { register, handleSubmit, formState: { errors } } = useForm({ 
		resolver: yupResolver(userEditFormRules),
		defaultValues: {
			login: authUser.login,
		}
	});


	const onSubmit = (userData) => {
		delete userData.passcheck;

		dispatch(updateAuthUser(requestServer, authUser.id, userData));
	};


	return (
		<div style={{maxWidth: "300px"}}>
			<form onSubmit={handleSubmit(onSubmit)} style={{display: "grid", gap: "10px"}}>
				<input {...register('login')} type="text" placeholder='Логин...' />
				<input {...register('password')} type="password" placeholder='Пароль...' />
				<input {...register('passcheck')} type="password" placeholder='Проверка паролья...' />
				<button type='submit'>Внести изменения</button>
			</form>
			<ErrorList formErrors={errors} />
		</div>
	)
};