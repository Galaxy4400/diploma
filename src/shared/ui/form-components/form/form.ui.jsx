import { FormProvider, useForm } from 'react-hook-form';

export function Form({ className = '', defaultValues, resolver, onSubmit, children, ...rest }) {
	const methods = useForm({ defaultValues, resolver });
	const { handleSubmit } = methods;

	return (
		<FormProvider {...{ ...methods, onSubmit }}>
			<form className={className} onSubmit={handleSubmit(onSubmit)} {...rest}>
				{children}
			</form>
		</FormProvider>
	);
}
