import css from './password.module.scss';
import { useFormContext } from "react-hook-form";

export function Password({ name, ...rest }) {
	const { register } = useFormContext();

	return <input className={css['input']} {...register(name)} {...rest} type='password' />
}