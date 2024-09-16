import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { authFormRules } from '../lib/rules';
import { ErrorList } from '../../../shared/ui';
import { useAuth } from '../../../app/providers/auth';
import { useLocation, useNavigate } from 'react-router-dom';


export const LoginForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm({ 
		resolver: yupResolver(authFormRules) 
	});

	const location = useLocation();
	const navigate = useNavigate();

	const { authorize, authorizeError } = useAuth();

	const onSubmit = async ({ login, password }) => {
		await authorize(login, password)

		navigate(location.state?.from?.pathname);
	};

	return (
		<div style={{width: "300px"}}>
			<form onSubmit={handleSubmit(onSubmit)} style={{display: "grid", gap: "10px"}}>
				<input {...register('login')} type="text" placeholder='Логин...' />
				<input {...register('password')} type="password" placeholder='Пароль...' />
				<button type='submit'>Войти</button>
			</form>
			<ErrorList formErrors={errors} />
			{authorizeError && <div>{authorizeError}</div>}
		</div>
	)
};