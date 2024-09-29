import css from './login.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../app/providers/auth';
import { loginFormRules } from './login.rules';
import { Form, Input } from '../../../shared/ui/form-components';
import { useState } from 'react';
import { Block } from '../../../shared/ui/components';
import { useFrom } from '../../../shared/lib/location';
import { path } from '../../../shared/lib/router';
import { Button } from '../../../shared/ui/form-components';

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
		<Block className={css['block']}>
			<h1 className={css['title']}>Авторизация</h1>
			<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(loginFormRules)}>
				<Input type="text" name="login" label="Логин" />
				<Input type="password" name="password" label="Пароль" />
				<Button type="submit" disabled={isLoading}>
					Войти
				</Button>
			</Form>
			<Link className={css['link']} to={path.register()}>
				Регистрация
			</Link>
			{authorizeError && <div>{authorizeError}</div>}
		</Block>
	);
};
