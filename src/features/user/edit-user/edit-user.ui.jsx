import { useDispatch, useSelector } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { selectAuth, updateAuth } from "../../../entities/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUserFormRules } from "./edit-user.rules";
import { ErrorList } from "../../../shared/ui";


export const EditUserForm = () => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();

	const authUser = useSelector(selectAuth);
	
	const { register, handleSubmit, formState: { errors } } = useForm({ 
		resolver: yupResolver(editUserFormRules)
	});

	const onSubmit = (userData) => {
		delete userData.passcheck;

		dispatch(updateAuth(requestServer, authUser.id, userData));
	};

	return (
		<div style={{maxWidth: "300px"}}>
			<form onSubmit={handleSubmit(onSubmit)} style={{display: "grid", gap: "10px"}}>
				<input {...register('login')} defaultValue={authUser.login} type="text" placeholder='Логин...' />
				<input {...register('password')} type="password" placeholder='Пароль...' />
				<input {...register('passcheck')} type="password" placeholder='Проверка паролья...' />
				<button type='submit'>Внести изменения</button>
			</form>
			<ErrorList formErrors={errors} />
		</div>
	)
};