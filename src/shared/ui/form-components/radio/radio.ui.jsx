import css from './radio.module.scss';
import { useFormContext } from 'react-hook-form';

export const Radio = ({ name, value, label, ...rest }) => {
	const { register } = useFormContext();

	return (
		<label className={css['wrapper']}>
			<input className={css['input']} {...register(name)} value={value} type="radio" {...rest} />
			<div className={css['label']}>{label}</div>
		</label>
	);
};
