import css from './input.module.scss';
import { useFormContext } from 'react-hook-form';

export const Input = ({ name, label, type = 'text', ...rest }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<label className={css['wraper']}>
			{label && <span className={css['label']}>{label}</span>}
			<input className={css['input']} {...register(name)} type={type} {...rest} />
			{!!errors[name] && <p className={css['error']}>{errors[name]?.message}</p>}
		</label>
	);
};
