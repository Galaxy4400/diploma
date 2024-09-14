import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { authFormRules } from '../lib/rules';
import { ErrorList } from '../../../shared/ui';
import { useOnLogin } from '../hooks';


export const LoginForm = () => {
	const {
		register, handleSubmit, formState: { errors }
	} = useForm({ resolver: yupResolver(authFormRules) });

	const { onSubmit, loginError } = useOnLogin();

	return (
		<div style={{maxWidth: "300px"}}>
			<form onSubmit={handleSubmit(onSubmit)} style={{display: "grid", gap: "10px"}}>
				<input {...register('login')} type="text" placeholder='Логин...' />
				<input {...register('password')} type="password" placeholder='Пароль...' />
				<button type='submit'>Войти</button>
			</form>
			<ErrorList formErrors={errors} />
			{loginError && <div>{loginError}</div>}
		</div>
	)
};