import { useFormContext } from 'react-hook-form';

export function Hidden({ name, ...rest }) {
	const { register } = useFormContext();

	return <input {...register(name)} {...rest} type="hidden" />;
}
