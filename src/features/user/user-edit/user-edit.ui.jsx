import { useDispatch } from "react-redux";
import { useServer } from "../../../app/providers/server";
import { updateAuth } from "../../../entities/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUserFormRules } from "./user-edit.rules";
import { ErrorList } from "../../../shared/ui";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router/path";


export const EditUserForm = ({ userData }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { requestServer } = useServer();
	
	const { register, handleSubmit, formState: { errors } } = useForm({ 
		resolver: yupResolver(editUserFormRules),
	});

	const onSubmit = (updatedData) => {
		delete updatedData.passcheck;

		dispatch(updateAuth(requestServer, updatedData));

		navigate(path.home());
	};

	return (
		<>
			{userData &&
				<div style={{maxWidth: "300px"}}>
					<form onSubmit={handleSubmit(onSubmit)} style={{display: "grid", gap: "10px"}}>
						<input {...register('login')} type="text" defaultValue={userData.login} placeholder='Логин...' />
						<input {...register('password')} type="password" placeholder='Пароль...' />
						<input {...register('passcheck')} type="password" placeholder='Проверка паролья...' />
						<button type='submit'>Внести изменения</button>
					</form>
					<ErrorList formErrors={errors} />
				</div>
			}
		</>
	)
};