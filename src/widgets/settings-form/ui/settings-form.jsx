import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ErrorList } from "../../../shared/ui";
import { settingsFormRules } from "../lib";
import { useSelector } from "react-redux";
import { userSelector } from "../../../app/store";
import { useOnUserUpdate } from "../hooks";

export const SettingsForm = () => {
	const authUser = useSelector(userSelector.user);
	
	const {
		register, handleSubmit, formState: { errors }
	} = useForm({ 
		resolver: yupResolver(settingsFormRules),
		defaultValues: {
			id: authUser.id,
			login: authUser.login,
		}
	});

	const { onSubmit, userUpdateError } = useOnUserUpdate();

	return (
		<div style={{maxWidth: "300px"}}>
			<form onSubmit={handleSubmit(onSubmit)} style={{display: "grid", gap: "10px"}}>
				<input {...register('id')} type="hidden"/>
				<input {...register('login')} type="text" placeholder='Логин...' />
				<input {...register('password')} type="password" placeholder='Пароль...' />
				<input {...register('passcheck')} type="password" placeholder='Проверка паролья...' />
				<button type='submit'>Внести изменения</button>
			</form>
			<ErrorList formErrors={errors} />
			{userUpdateError && <div>{userUpdateError}</div>}
		</div>
	)
};