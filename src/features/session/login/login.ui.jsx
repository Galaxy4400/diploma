import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../app/providers/auth";
import { loginFormRules } from "./login.rules";
import { Form, Input, Password } from "../../../shared/ui/form-components";
import { useState } from "react";
import { Loader } from "../../../shared/ui/components";
import { useFrom } from "../../../shared/lib/location";
import { path } from "../../../shared/lib/router";
import { Button } from "../../../shared/ui/form-components";


export const LoginForm = () => {
	const navigate = useNavigate();
	const from = useFrom();
	const [isLoading, setIsLoading] = useState(false);

	const { authorize, authorizeError } = useAuth();

	const submitHandler = async ({ login, password }) => {
		setIsLoading(true);

		await authorize(login, password);

		setIsLoading(false);

		navigate(from?.pathname || path.home());
	};

	return (
		<Loader isLoading={isLoading}>
			<Form onSubmit={submitHandler} resolver={yupResolver(loginFormRules)}>
				<Input name="login" placeholder='Логин...' />
				<Password name="password" placeholder='Пароль...' />
				<Button type='submit'>Войти</Button>
			</Form>
			{authorizeError && <div>{authorizeError}</div>}
		</Loader>
	)
};