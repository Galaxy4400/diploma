import css from './register.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFormRules } from './register.rules';
import { useAuth } from '../../../app/providers/auth';
import { Button, Form, Input } from '../../../shared/ui/form-components';
import { useState } from 'react';
import { Block } from '../../../shared/ui/components';
import { Link } from 'react-router-dom';
import { path } from '../../../shared/lib/router';

export const RegisterForm = () => {
	const { registration, registrationError } = useAuth();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = async ({ login, password }) => {
		setIsLoading(true);

		await registration(login, password);

		setIsLoading(false);
	};

	return (
		<Block className={css['block']}>
			<h1 className={css['title']}>Регистрация</h1>
			<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(registerFormRules)}>
				<Input type="text" name="login" label="Логин" />
				<Input type="password" name="password" label="Пароль" />
				<Input type="password" name="passcheck" label="Повторите пароль" />
				<Button type="submit" disabled={isLoading}>
					Зарегистрироваться
				</Button>
			</Form>
			<Link className={css['link']} to={path.login()}>
				Авторизация
			</Link>
			{registrationError && <div>{registrationError}</div>}
		</Block>
	);
};
