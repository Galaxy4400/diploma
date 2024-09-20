import { useFormContext } from "react-hook-form"

export function Input({ name, ...rest }) {
	const { register } = useFormContext();

  return <input {...register(name)} {...rest} type='text' />
}