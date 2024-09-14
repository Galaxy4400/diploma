import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useServer } from '../../app/providers/server-provider';
import { ErrorList } from '../../shared/ui';
import { useDispatch } from 'react-redux';
import { userAction } from '../../app/store';
import { registerFormRules } from './rules';


export const RegisterForm = () => {
	const {
		register, handleSubmit, formState: { errors }
	} = useForm({ resolver: yupResolver(registerFormRules) });

	const dispatch = useDispatch();

	const { requestServer, serverError } = useServer();

	const onSubmit = async ({ login, password }) => {
		const createdUser = await requestServer.register(login, password);
		
		if (!createdUser) return;

		const authUser = await requestServer.authorize(login, password);

		if (!authUser) return;

		dispatch(userAction.setUser(authUser));
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('login')} type="text" placeholder='Логин...' />
				<input {...register('password')} type="text" placeholder='Пароль...' />
				<input {...register('passcheck')} type="text" placeholder='Проверка паролья...' />
				<button type='submit'>Зарегистрироваться</button>
			</form>
			<ErrorList formErrors={errors} />
			{serverError && <div>{serverError}</div>}
		</div>
	)
};