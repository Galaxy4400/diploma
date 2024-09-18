import { useDispatch } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { updateAuth } from "../../../entities/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUserFormRules } from "./edit-user.rules";
import { ErrorList } from "../../../shared/ui";
import { useEffect } from "react";


export const EditUserForm = ({ userData }) => {
	const dispatch = useDispatch();
	const { requestServer } = useServer();
	
	const { register, handleSubmit, reset, formState: { errors } } = useForm({ 
		resolver: yupResolver(editUserFormRules),
	});

	useEffect(() => {
		reset({
			login: userData.login,
		});
	}, [userData, reset]);

	const onSubmit = (updatedData) => {
		delete updatedData.passcheck;

		dispatch(updateAuth(requestServer, userData.id, updatedData));
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