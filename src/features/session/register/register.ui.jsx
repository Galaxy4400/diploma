import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormRules } from "./register.rules";
import { useAuth } from "../../../app/providers/auth";
import { Form, Input, Password } from "../../../shared/ui/react-hook-form";
import { useState } from "react";
import { WithLoader } from "../../../shared/ui";


export const RegisterForm = () => {
	const { registration, registrationError } = useAuth();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async ({ login, password }) => {
		setIsLoading(true);

		await registration(login, password);

		setIsLoading(false);
	};

	return (
		<WithLoader isLoading={isLoading} style={{width: "300px"}}>
			<Form onSubmit={submitHandler} resolver={yupResolver(registerFormRules)} style={{display: "grid", gap: "10px"}}>
				<Input name="login" placeholder="Логин..." />
				<Password name="password" placeholder="Пароль..." />
				<Password name="passcheck" placeholder="Проверка пароль..." />
				<button type='submit'>Зарегистрироваться</button>
			</Form>
			{registrationError && <div>{registrationError}</div>}
		</WithLoader>
	)
};