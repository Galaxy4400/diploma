import { useFormContext } from "react-hook-form";

export const Radio = ({ name, value, label, ...rest }) => {
	const { register } = useFormContext();

	return (
		<label>
			<input {...register(name)} value={value} type="radio" {...rest}/>
			<span>{label}</span>
		</label>
	)
};