import { useFormContext } from 'react-hook-form';

export const Hidden = ({ name, ...rest }) => {
	const { register } = useFormContext();

	return <input {...register(name)} {...rest} type="hidden" />;
};
