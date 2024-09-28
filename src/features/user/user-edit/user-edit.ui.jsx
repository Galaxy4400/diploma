import css from './user-edit.module.scss';
import { useDispatch } from "react-redux";
import { updateAuth } from "../../../entities/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUserFormRules } from "./user-edit.rules";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router/path";
import { Button, Form, Input } from "../../../shared/ui/form-components";
import { useState } from "react";
import { Block } from "../../../shared/ui/components";


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
		<Block className={css['block']}>
			<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(editUserFormRules)}>
				<Input type="text" name="login" defaultValue={userData.login} label="Логин" />
				<Input type="password" name="password" label="Пароль" />
				<Input type="password" name="passcheck" label="Повторите пароль" />
				<Button type='submit' disabled={isLoading}>Внести изменения</Button>
			</Form>
		</Block>
	);
};