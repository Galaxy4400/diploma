import { useFormContext } from "react-hook-form";

export function Password({ name, ...rest }) {
	const { register } = useFormContext();

	return <input {...register(name)} {...rest} type='password' />
}