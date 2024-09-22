import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../app/providers/auth";
import { loginFormRules } from "./login.rules";
import { Form, Input, Password } from "../../../shared/ui/react-hook-form";
import { useState } from "react";
import { Loader } from "../../../shared/ui";
import { useFrom } from "../../../shared/lib/location";
import { path } from "../../../shared/lib/router";


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
		<Loader isLoading={isLoading} style={{ width: "300px" }}>
			<Form onSubmit={submitHandler} resolver={yupResolver(loginFormRules)} style={{ display: "grid", gap: "10px" }} >
				<Input name="login" placeholder='Логин...' />
				<Password name="password" placeholder='Пароль...' />
				<button type='submit'>Войти</button>
			</Form>
			{authorizeError && <div>{authorizeError}</div>}
		</Loader>
	)
};