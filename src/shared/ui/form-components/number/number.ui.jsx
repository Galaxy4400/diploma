import { useFormContext } from "react-hook-form"

export function Number({ name, ...rest }) {
	const { register } = useFormContext();

  return <input {...register(name)} {...rest} type='number' />
}