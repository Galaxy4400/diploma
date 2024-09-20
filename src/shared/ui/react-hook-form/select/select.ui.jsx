import { useFormContext } from "react-hook-form"

export function Select({ name, options, ...rest }) {
	const { register } = useFormContext();

  return (
		<select {...register(name)} {...rest}>
			{options.map(({value, label}) => (
				<option key={value} value={value}>{label}</option>
			))}
		</select>
	)
}