import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useServer } from '../../app/providers/server-provider';
import { authFormRules } from './rules';
import { ErrorList } from '../../shared/ui';
import { useDispatch } from 'react-redux';
import { userAction } from '../../app/store';


export const LoginForm = () => {
	const {
		register, handleSubmit, formState: { errors }
	} = useForm({ resolver: yupResolver(authFormRules) });

	const dispatch = useDispatch();

	const { requestServer, serverError } = useServer();

	const onSubmit = async ({ login, password }) => {
		const authUser = await requestServer.authorize(login, password);

		if (!authUser) return;

		dispatch(userAction.setUser(authUser));
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('login')} type="text" placeholder='Логин...' />
				<input {...register('password')} type="text" placeholder='Пароль...' />
				<button type='submit'>Войти</button>
			</form>
			<ErrorList formErrors={errors} />
			{serverError && <div>{serverError}</div>}
		</div>
	)
};