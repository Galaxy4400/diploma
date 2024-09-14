import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ErrorList } from '../../../shared/ui';
import { registerFormRules } from '../lib/rules';
import { useOnRegister } from '../hooks';


export const RegisterForm = () => {
	const {
		register, handleSubmit, formState: { errors }
	} = useForm({ resolver: yupResolver(registerFormRules) });

	const { onSubmit, registerError } = useOnRegister();

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('login')} type="text" placeholder='Логин...' />
				<input {...register('password')} type="text" placeholder='Пароль...' />
				<input {...register('passcheck')} type="text" placeholder='Проверка паролья...' />
				<button type='submit'>Зарегистрироваться</button>
			</form>
			<ErrorList formErrors={errors} />
			{registerError && <div>{registerError}</div>}
		</div>
	)
};