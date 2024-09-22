import { useDispatch } from "react-redux";
import { updateAuth } from "../../../entities/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUserFormRules } from "./user-edit.rules";
import { useNavigate } from "react-router-dom";
import { path } from "../../../shared/lib/router/path";
import { Form, Input, Password } from "../../../shared/ui/react-hook-form";
import { useState } from "react";
import { Loader } from "../../../shared/ui";


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
		<>
			{userData &&
				<Loader isLoading={isLoading} style={{maxWidth: "300px"}}>
					<Form onSubmit={submitHandler} resolver={yupResolver(editUserFormRules)} style={{display: "grid", gap: "10px"}} >
						<Input name="login" defaultValue={userData.login} placeholder="Логин..." />
						<Password name="password" placeholder="Пароль..." />
						<Password name="passcheck" placeholder="Проверка пароль..." />
						<button type='submit'>Внести изменения</button>
					</Form>
				</Loader>
			}
		</>
	)
};