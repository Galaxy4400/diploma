import css from './input.module.scss';
import { useFormContext } from 'react-hook-form';

export function Input({ name, label, type = 'text', ...rest }) {
	const { register } = useFormContext();

	return (
		<label className={css['wraper']}>
			{label && <span className={css['label']}>{label}</span>}
			<input className={css['input']} {...register(name)} type={type} {...rest} />
		</label>
	);
}
