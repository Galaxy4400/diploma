import css from './input.module.scss';
import { useFormContext } from "react-hook-form"

export function Input({ name, ...rest }) {
	const { register } = useFormContext();

  return <input className={css['input']} {...register(name)} {...rest} type='text' />
}