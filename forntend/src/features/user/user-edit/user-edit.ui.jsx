import css from './user-edit.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAuthAsync } from '../../../entities/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { editUserFormRules } from './user-edit.rules';
import { useNavigate } from 'react-router-dom';
import { path } from '../../../shared/lib/router/path';
import { Button, Form, Input } from '../../../shared/ui/form-components';
import { Block } from '../../../shared/ui/components';
import { useToast } from '../../../app/providers/toast';

export const EditUserForm = ({ userData }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { showToast } = useToast();
	const [isLoading, setIsLoading] = useState(false);

	const submitHandler = (submittedData) => {
		delete submittedData.passcheck;

		setIsLoading(true);

		dispatch(updateAuthAsync(userData.id, submittedData)).then(() => {
			setIsLoading(false);
			navigate(path.home());
			showToast({ message: 'Изменения внесены', type: 'success' });
		});
	};

	return (
		<Block className={css['block']}>
			<Form className={css['form']} onSubmit={submitHandler} resolver={yupResolver(editUserFormRules)}>
				<Input type="text" name="login" defaultValue={userData.login} label="Логин" />
				<Input type="email" name="email" defaultValue={userData.email} label="E-mail" />
				<Input type="text" name="name" defaultValue={userData.name} label="Имя" />
				<Input type="text" name="surname" defaultValue={userData.surname} label="Фамилия" />
				<Input type="text" name="address" defaultValue={userData.address} label="Адрес" />
				<Input type="password" name="password" label="Пароль" />
				<Input type="password" name="passcheck" label="Повторите пароль" />
				<Button type="submit" disabled={isLoading} loading={isLoading}>
					Внести изменения
				</Button>
			</Form>
		</Block>
	);
};
