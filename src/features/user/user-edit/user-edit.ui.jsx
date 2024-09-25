import { useDispatch } from "react-redux";
import { updateAuth } from "../../../entities/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUserFormRules } from "./user-edit.rules";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router/path";
import { Form, Input, Password } from "../../../shared/ui/form-components";
import { useState } from "react";
import { Loader } from "../../../shared/ui/components";


export const EditUserForm = ({ userData }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = (submittedData) => {
		delete submittedData.passcheck;

		setIsLoading(true);

		dispatch(updateAuth(submittedData))
			.then(() => {
				setIsLoading(false)
				navigate(path.home());
			});
	};

	return (
		<Loader isLoading={isLoading}>
			<Form onSubmit={submitHandler} resolver={yupResolver(editUserFormRules)}>
				<Input name="login" defaultValue={userData.login} placeholder="Логин..." />
				<Password name="password" placeholder="Пароль..." />
				<Password name="passcheck" placeholder="Проверка пароль..." />
				<button type='submit'>Внести изменения</button>
			</Form>
		</Loader>
	);
};