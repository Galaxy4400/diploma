import { useFormContext } from 'react-hook-form';
import css from './textarea.module.scss';

export function Textarea({ name, label, ...rest }) {
	const { register } = useFormContext();

	return (
		<label className={css['wraper']}>
			{label && <span className={css['label']}>{label}</span>}
			<textarea className={css['input']} {...register(name)} {...rest} />
		</label>
	);
}
