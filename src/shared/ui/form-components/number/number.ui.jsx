import css from './number.module.scss';
import { useFormContext } from 'react-hook-form';

export function Number({ name, ...rest }) {
	const { register } = useFormContext();

	return <input className={css['input']} {...register(name)} {...rest} type="number" />;
}
